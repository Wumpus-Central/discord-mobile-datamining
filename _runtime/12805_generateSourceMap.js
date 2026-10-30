// _runtime/12805_generateSourceMap.js
let closure_2 = { Atrule: true, Selector: true, Declaration: true };

export default function generateSourceMap(node) {
  sourceMapGenerator = new sourceMapGenerator(12806).SourceMapGenerator();
  dependencyMap = 1;
  const column = 0;
  let generated = { line: 1, column: 0 };
  const line2 = { line: 0, column: 0 };
  c5 = false;
  generated = { line: 1, column: 0 };
  closure_7 = { generated };
  node = node.node;
  node.node = function (loc) {
    if (loc.loc) {
      if (loc.loc.start) {
        if (column.hasOwnProperty(loc.type)) {
          line = loc.loc.start.line;
          const diff = loc.loc.start.column - 1;
          if (!tmp4) {
            line2.line = line;
            line2.column = diff;
            generated.line = line;
            generated.column = column;
            if (c5) {
              c5 = false;
              if (!tmp10) {
                sourceMapGenerator.addMapping(closure_7);
              }
              tmp10 = generated.line === obj.line && generated.column === tmp9.column;
            }
            c5 = true;
            obj = { source: loc.loc.source, original: line2, generated };
            sourceMapGenerator.addMapping(obj);
          }
          tmp4 = line2.line === line && line2.column === diff;
        }
      }
    }
    const self = this;
    const call = node.call;
    if (typeof call === "unknown") {
      node(loc);
    } else {
      call(self, loc);
    }
    let hasOwnPropertyResult = c5;
    if (c5) {
      hasOwnPropertyResult = column.hasOwnProperty(loc.type);
    }
    if (hasOwnPropertyResult) {
      obj.line = line;
      obj.column = column;
    }
  };
  const chunk = node.chunk;
  node.chunk = (str) => {
    for (let num = 0; num < str.length; num = num + 1) {
      if (10 === str.charCodeAt(num)) {
        closure_1 = closure_1 + 1;
        closure_2 = 0;
      } else {
        closure_2 = closure_2 + 1;
      }
    }
    chunk(str);
  };
  const result = node.result;
  node.result = () => {
    if (c5) {
      sourceMapGenerator.addMapping(closure_7);
    }
    return { css: result(), map: sourceMapGenerator };
  };
  return node;
}
