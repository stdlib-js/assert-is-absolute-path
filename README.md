<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isAbsolutePath

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an absolute path.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import isAbsolutePath from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-path@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { posix, win32 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-path@esm/index.mjs';
```

#### isAbsolutePath( value )

Tests if a `value` is an absolute path.

```javascript
import IS_WINDOWS from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs';

var bool;
if ( IS_WINDOWS ) {
    bool = isAbsolutePath( 'C:\\foo\\bar\\baz' );
    // returns true
} else {
    bool = isAbsolutePath( '/foo/bar/baz' );
    // returns true
}
```

#### isAbsolutePath.posix( value )

Tests if a `value` is a POSIX absolute path.

```javascript
var bool = isAbsolutePath.posix( '/foo/bar/baz' );
// returns true

bool = isAbsolutePath.posix( 'foo/bar/baz' );
// returns false
```

#### isAbsolutePath.win32( value )

Tests if a `value` is a Windows absolute path.

```javascript
var bool = isAbsolutePath.win32( 'C:\\foo\\bar\\baz' );
// returns true

bool = isAbsolutePath.win32( 'foo\\bar\\baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `isAbsolutePath()` is platform-specific. On Windows platforms, the function is equal to `isAbsolutePath.win32()`. On POSIX platforms, the function is equal to `isAbsolutePath.posix()`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isAbsolutePath from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-absolute-path@esm/index.mjs';

var bool = isAbsolutePath.posix( '/foo/bar/baz' );
// returns true

bool = isAbsolutePath.posix( '/foo/..' );
// returns true

bool = isAbsolutePath.posix( 'foo/' );
// returns false

bool = isAbsolutePath.posix( 'foo' );
// returns false

bool = isAbsolutePath.posix( '.' );
// returns false

bool = isAbsolutePath.posix( '' );
// returns false

bool = isAbsolutePath.win32( 'C:\\foo\\bar\\baz' );
// returns true

bool = isAbsolutePath.win32( '//server' );
// returns true

bool = isAbsolutePath.win32( '\\\\server' );
// returns true

bool = isAbsolutePath.win32( 'C:/foo/bar/baz' );
// returns true

bool = isAbsolutePath.win32( '/foo/..' );
// returns true

bool = isAbsolutePath.win32( 'foo\\bar\\baz' );
// returns false

bool = isAbsolutePath.win32( 'foo/bar/baz' );
// returns false

bool = isAbsolutePath.win32( 'foo/..' );
// returns false

bool = isAbsolutePath.win32( '.' );
// returns false

bool = isAbsolutePath.win32( '' );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-relative-path`][@stdlib/assert/is-relative-path]</span><span class="delimiter">: </span><span class="description">test if a value is a relative path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-absolute-path.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-absolute-path

[test-image]: https://github.com/stdlib-js/assert-is-absolute-path/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-absolute-path/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-absolute-path/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-absolute-path?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-absolute-path.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-absolute-path/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-absolute-path/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-absolute-path/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-absolute-path/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-absolute-path/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-absolute-path/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-relative-path]: https://github.com/stdlib-js/assert-is-relative-path/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
