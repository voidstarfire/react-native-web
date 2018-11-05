/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Prevent browsers throwing parse errors, e.g., on vendor-prefixed pseudo-elements
const safeRule = rule => `@media all{\n${rule}\n}`;

const systemFontStack =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif';

const resets = [
  // minimal top-level reset
  'html{' +
    '-ms-text-size-adjust:100%;' +
    '-webkit-text-size-adjust:100%;' +
    '-webkit-tap-highlight-color:rgba(0,0,0,0);' +
    '}',
  'body{margin:0;}',
  // minimal form pseudo-element reset
  'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}',
  'input::-webkit-inner-spin-button,' +
    'input::-webkit-outer-spin-button,' +
    'input::-webkit-search-cancel-button,' +
    'input::-webkit-search-decoration,' +
    'input::-webkit-search-results-button,' +
    'input::-webkit-search-results-decoration{' +
    'display:none;' +
    '}',
  // Reset styles for heading, link, and list DOM elements
  '.ui-base{' +
    'background-color:transparent;' +
    'color:inherit;' +
    'font:inherit;' +
    'list-style:none;' +
    'margin:0;' +
    'text-align:inherit;' +
    'text-decoration:none;' +
    '}',
  // View starting styles
  '.ui-view{' +
    '-ms-flex-align:stretch;' +
    '-webkit-box-align:stretch;' +
    '-webkit-align-items:stretch;' +
    'align-items:stretch;' +
    'border-color:black;' +
    'border-style:solid;' +
    'border-width:0;' +
    'box-sizing:border-box;' +
    'display:-webkit-box;' +
    'display:-moz-box;' +
    'display:-ms-flexbox;' +
    'display:-webkit-flex;' +
    'display:flex;' +
    '-ms-flex-preferred-size:auto;' +
    '-webkit-flex-basis:auto;' +
    'flex-basis:auto;' +
    '-ms-flex-direction:column;' +
    '-webkit-box-direction:normal;' +
    '-webkit-box-orient:vertical;' +
    '-webkit-flex-direction:column;' +
    'flex-direction:column;' +
    '-ms-flex-negative:0;' +
    '-webkit-flex-shrink:0;' +
    'flex-shrink:0;' +
    'margin:0;' +
    'min-width:0;' +
    'padding:0;' +
    'position:relative;' +
    'z-index:0;' +
    '}',
  // Text starting styles
  '.ui-text{' +
    'background-color:transparent;' +
    'border-width:0;' +
    'box-sizing:border-box;' +
    'color:inherit;' +
    'display:inline;' +
    'font:inherit;' +
    `font-family:${systemFontStack};` +
    'font-size:14px;' +
    'margin:0;' +
    'padding:0;' +
    'text-align:inherit;' +
    'text-decoration:none;' +
    'white-space:pre-wrap;' +
    'word-wrap:break-word;' +
    '}',
  // TextInput starting styles
  '.ui-textinput{' +
    '-moz-appearance:textfield;' +
    '-webkit-appearance:none;' +
    'background-color:transparent;' +
    'border-color:black;' +
    'border-radius:0;' +
    'border-style:solid;' +
    'border-width:0;' +
    'box-sizing:border-box;' +
    `font-family:${systemFontStack};` +
    'font-size:14px;' +
    'padding:0;' +
    'resize:none;' +
    '}',
  // Pressable starting style
  '.ui-pressable{cursor:pointer;}'
];

const reset = [safeRule(resets.join('\n'))];

export default reset;
