// _runtime/07525_parameterize.js
arg5.parameterize = function parameterize(join) {
  const substr = [...arguments].slice();
  const items = [join, ...substr];
  const string = new String(String.raw.apply(items));
  const str = join.join("\0");
  string.__sentry_template_string__ = join.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
  string.__sentry_template_values__ = substr;
  return string;
};