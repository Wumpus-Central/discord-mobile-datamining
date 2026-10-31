// === Module 12863: ? ===

// Module 12863
import _mod12835 from "module_12835" /* 12835 */;

function getFirstMatchNode(node) {
  if ("node" in node) {
    node = node.node;
  } else {
    node = getFirstMatchNode(node.match[0]);
  }
  return node;
}
function getLastMatchNode(node) {
  if ("node" in node) {
    node = node.node;
  } else {
    node = getLastMatchNode(node.match[node.match.length - 1]);
  }
  return node;
}

export default {
  matchFragments(arg0, value, matched, arg3, arg4) {
    closure_0 = arg0;
    closure_1 = value;
    closure_2 = arg3;
    closure_3 = arg4;
    const items = [];
    if (null !== matched.matched) {
      function findFragments(matched) {
        if (null !== matched.syntax) {
          if (matched.syntax.type === closure_2) {
            if (matched.syntax.name === closure_3) {
              if ("node" in matched) {
                let node = matched.node;
              } else if ("node" in matched.match[0]) {
                node = str.node;
              } else {
                node = closure_2(str.match[0]);
              }
              if ("node" in matched) {
                let node2 = matched.node;
              } else if ("node" in matched.match[matched.match.length - 1]) {
                node2 = str2.node;
              } else {
                node2 = closure_3(str2.match[str2.match.length - 1]);
              }
              const syntax = node.syntax;
              syntax.walk(node2, (arg0, arg1, parent) => {
                if (arg0 === node) {
                  let iter = arg1;
                  const obj2 = new _mod12835();
                  obj2.appendData(iter.data);
                  while (iter.data !== node2) {
                    iter = iter.next;
                    if (null === iter) {
                      break;
                    }
                  }
                  const obj = { parent, nodes: obj2 };
                  items.push(obj);
                }
              });
            }
          }
        }
        if (Array.isArray(matched.match)) {
          const match = matched.match;
          const item = match.forEach(findFragments);
        }
      }
      findFragments(matched.matched);
    }
    return items;
  }
};