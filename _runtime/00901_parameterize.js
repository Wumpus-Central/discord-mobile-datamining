// _runtime/00901_parameterize.js
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
arg5.fmt = parameterize;
arg5.parameterize = parameterize;
