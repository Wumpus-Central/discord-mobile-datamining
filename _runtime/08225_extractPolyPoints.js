// _runtime/08225_extractPolyPoints.js

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const str3 = str.replace(/[^eE]-/, " -");
  const parts = str3.split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
}
