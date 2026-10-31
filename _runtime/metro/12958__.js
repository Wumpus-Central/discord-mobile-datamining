// === Module 12958: ? ===

// Module 12958
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const parse = require("module_12959").parse;
export const compile = require("compile").compile;
export const generate = require("compile").generate;
export default function nthCheck(arg0) {
  return require("compile").compile(require("module_12959").parse(arg0));
};
export function sequence(arg0) {
  return require("compile").generate(require("module_12959").parse(arg0));
}