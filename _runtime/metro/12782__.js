// === Module 12782: ? ===

// Module 12782
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const parse = require("module_12783").parse;
export const compile = require("compile").compile;
export const generate = require("compile").generate;
export default function nthCheck(arg0) {
  return require("compile").compile(require("module_12783").parse(arg0));
};
export function sequence(arg0) {
  return require("compile").generate(require("module_12783").parse(arg0));
}