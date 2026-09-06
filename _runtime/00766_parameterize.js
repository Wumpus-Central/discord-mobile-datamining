// _runtime/00766_parameterize.js
function parameterize(join) {
  const substr = [...arguments].slice();
  const items = [join, ...substr];
  const string = new String(String.raw.apply(items));
  const str = join.join("\0");
  string.__sentry_template_string__ = join.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
  string.__sentry_template_values__ = substr;
  return string;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const fmt = parameterize;
export { parameterize };
