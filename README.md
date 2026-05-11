<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zlastIndexOfRow

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zlast-index-of-row
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zlastIndexOfRow = require( '@stdlib/blas-ext-base-zlast-index-of-row' );
```

#### zlastIndexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )

Returns the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 3+0i, 4+0i ]
    ]
*/
var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
var workspace = new Uint8Array( 3 );
var out = zlastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
// returns 2
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored as a [`Complex128Array`][@stdlib/array/complex128].
-   **LDA**: stride length for the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: search vector stored as a [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **workspace**: workspace array stored as a [`Uint8Array`][mdn-uint8array] for tracking row match candidates. This parameter is ignored if the input matrix is stored in row-major order.
-   **strideW**: stride length for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may provide an empty workspace array.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 3+0i, 4+0i ]
    ]
*/
var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
var workspace = new Uint8Array( 0 );
var out = zlastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
// returns 2
```

If the function is unable to find a matching row, the function returns `-1`.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 3+0i, 4+0i ]
    ]
*/
var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

var x = new Complex128Array( [ -3.0, 0.0, -4.0, 0.0 ] );
var workspace = new Uint8Array( 3 );
var out = zlastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
// returns -1
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

// Initial arrays:
var A0 = new Complex128Array( [ 9999.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var x0 = new Complex128Array( [ 9999.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

// Create offset views:
var A1 = new Complex128Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var workspace = new Uint8Array( 3 );
var out = zlastIndexOfRow( 'row-major', 3, 2, A1, 2, x1, 1, workspace, 1 );
// returns 1
```

<!-- lint disable maximum-heading-length -->

#### zlastIndexOfRow.ndarray( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX, workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Returns the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 3+0i, 4+0i ]
    ]
*/
var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
var workspace = new Uint8Array( 3 );
var out = zlastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
// returns 2
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored as a [`Complex128Array`][@stdlib/array/complex128].
-   **strideA1**: stride length for the first dimension of `A`.
-   **strideA2**: stride length for the second dimension of `A`.
-   **offsetA**: starting index for `A`.
-   **x**: search vector stored as a [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **offsetX**: starting index for `x`.
-   **workspace**: workspace array stored as a [`Uint8Array`][mdn-uint8array] for tracking row match candidates. This parameter is ignored if the input matrix is stored in row-major order.
-   **strideW**: stride length for `workspace`.
-   **offsetW**: starting index for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may provide an empty workspace array.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 3+0i, 4+0i ]
    ]
*/
var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );

var x = new Complex128Array( [ 3.0, 0.0, 4.0, 0.0 ] );
var workspace = new Uint8Array( 0 );
var out = zlastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
// returns 2
```

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );

/*
    A = [
        [ 1+0i, 2+0i ],
        [ 3+0i, 4+0i ],
        [ 0+0i, 0+0i ]
    ]
*/
var A = new Complex128Array( [ 9999.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var x = new Complex128Array( [ 9999.0, 0.0, 3.0, 0.0, 4.0, 0.0 ] );
var workspace = new Uint8Array( 3 );
var out = zlastIndexOfRow.ndarray( 3, 2, A, 2, 1, 1, x, 1, 1, workspace, 1, 0 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `M <= 0` or `N <= 0`, both functions return `-1`.
-   When searching for a matching row, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Uint8Array = require( '@stdlib/array-uint8' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var zlastIndexOfRow = require( '@stdlib/blas-ext-base-zlast-index-of-row' );

var shape = [ 3, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var x = new Complex128Array( [ 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 ] );
console.log( x );

var workspace = new Uint8Array( shape[ 0 ] );

var out = zlastIndexOfRow( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ], x, 1, workspace, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zlast_index_of_row.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zlast_index_of_row( order, M, N, \*A, LDA, \*X, strideX, \*workspace, strideW )

<!-- lint enable maximum-heading-length -->

Returns the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdint.h>

const double A[] = { 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 4.0, 0.0, 0.0, 0.0 };
const double x[] = { 2.0, 0.0, 4.0, 0.0 };
uint8_t workspace[ 4 ];

int idx = stdlib_strided_zlast_index_of_row( CblasColMajor, 4, 2, (const stdlib_complex128_t *)A, 4, (const stdlib_complex128_t *)x, 1, workspace, 1 );
// returns 2
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **A**: `[in] stdlib_complex128_t*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride length for the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **X**: `[in] stdlib_complex128_t*` search vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **workspace**: `[inout] uint8_t*` workspace array for tracking row match candidates. This parameter is ignored if the input matrix is stored in row-major order.
-   **strideW**: `[in] CBLAS_INT` stride length for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may either provide an empty workspace array or a `NULL` pointer.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"

const double A[] = { 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
const double x[] = { 3.0, 0.0, 4.0, 0.0 };

int idx = stdlib_strided_zlast_index_of_row( CblasRowMajor, 4, 2, (const stdlib_complex128_t *)A, 2, (const stdlib_complex128_t *)x, 1, NULL, 1 );
// returns 2
```

```c
CBLAS_INT stdlib_strided_zlast_index_of_row( const CBLAS_LAYOUT order, const CBLAS_INT M, const CBLAS_INT N, const stdlib_complex128_t *A, const CBLAS_INT LDA, const stdlib_complex128_t *X, const CBLAS_INT strideX, uint8_t *workspace, const CBLAS_INT strideW );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zlast_index_of_row_ndarray( M, N, \*A, strideA1, strideA2, offsetA, \*X, strideX, offsetX, \*workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Returns the index of the last row in a double-precision complex floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>

const double A[] = { 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 4.0, 0.0, 0.0, 0.0 };
const double x[] = { 2.0, 0.0, 4.0, 0.0 };
uint8_t workspace[ 4 ];

int idx = stdlib_strided_zlast_index_of_row_ndarray( 4, 2, (const stdlib_complex128_t *)A, 1, 4, 0, (const stdlib_complex128_t *)x, 1, 0, workspace, 1, 0 );
// returns 2
```

The function accepts the following arguments:

-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **A**: `[in] stdlib_complex128_t*` input matrix.
-   **strideA1**: `[in] CBLAS_INT` stride length for the first dimension of `A`.
-   **strideA2**: `[in] CBLAS_INT` stride length for the second dimension of `A`.
-   **offsetA**: `[in] CBLAS_INT` starting index for `A`.
-   **X**: `[in] stdlib_complex128_t*` search vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **workspace**: `[inout] uint8_t*` workspace array for tracking row match candidates. This parameter is ignored if the input matrix is stored in row-major order.
-   **strideW**: `[in] CBLAS_INT` stride length for `workspace`.
-   **offsetW**: `[in] CBLAS_INT` starting index for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may either provide an empty workspace array or a `NULL` pointer.

```c
#include "stdlib/complex/float64/ctor.h"

const double A[] = { 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
const double x[] = { 3.0, 0.0, 4.0, 0.0 };

int idx = stdlib_strided_zlast_index_of_row_ndarray( 4, 2, (const stdlib_complex128_t *)A, 2, 1, 0, (const stdlib_complex128_t *)x, 1, 0, NULL, 1, 0 );
// returns 2
```

```c
CBLAS_INT stdlib_strided_zlast_index_of_row_ndarray( const CBLAS_INT M, const CBLAS_INT N, const stdlib_complex128_t *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, uint8_t *workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zlast_index_of_row.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Create a matrix (row-major, 4x3, interleaved real and imaginary components):
    const double A[] = { 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0, 4.0, 0.0, 5.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Create a search vector (interleaved real and imaginary components):
    const double x[] = { 4.0, 0.0, 5.0, 0.0, 6.0, 0.0 };

    // Specify the number of matrix rows and columns:
    const int M = 4;
    const int N = 3;

    // Perform a search:
    int idx = stdlib_strided_zlast_index_of_row( CblasRowMajor, M, N, (const stdlib_complex128_t *)A, N, (const stdlib_complex128_t *)x, 1, NULL, 1 );

    // Print the result:
    printf( "index value: %d\n", idx );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zlast-index-of-row.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zlast-index-of-row

[test-image]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zlast-index-of-row/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zlast-index-of-row?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zlast-index-of-row.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zlast-index-of-row/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-row/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zlast-index-of-row/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-uint8array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

</section>

<!-- /.links -->
