// === Module 12855: prepareTokens ===

// Module 12855 (prepareTokens)
import TokenStream from "TokenStream" /* 12828 */;
import _mod12833 from "module_12833" /* 12833 */;

function prepareTokens(arg0, items) {
  let node1 = null;
  if (items) {
    node1 = items[0].node;
  }
  items = [];
  _mod12833(arg0, closure_2);
  let num = 0;
  let num2 = 0;
  while (!closure_2.eof) {
    let tmp6 = node1;
    let tmp7 = num;
    let tmp8 = num2;
    if (items) {
      tmp6 = node1;
      tmp7 = num;
      tmp8 = num2;
      if (num < items.length) {
        let tmp12 = num;
        let tmp13 = num2;
        tmp6 = node1;
        tmp7 = num;
        tmp8 = num2;
        if (num2 + items[num].len <= closure_2.tokenStart) {
          let sum = tmp12 + 1;
          let sum1 = tmp13 + items[tmp12].len;
          let node = items[sum].node;
          tmp6 = node;
          tmp8 = sum1;
          tmp7 = sum;
          while (sum < items.length) {
            tmp12 = sum;
            tmp13 = sum1;
            tmp6 = node;
            tmp7 = sum;
            tmp8 = sum1;
            if (sum1 + items[sum].len > closure_2.tokenStart) {
              break;
            }
          }
        }
      }
    }
    let obj = { type: closure_2.tokenType, value: closure_2.getTokenValue(), index: closure_2.tokenIndex, balance: closure_2.balance[closure_2.tokenIndex], node: tmp6 };
    let arr = items.push(obj);
    let nextResult = closure_2.next();
    node1 = tmp6;
    num = tmp7;
    num2 = tmp8;
  }
  return items;
}
let closure_2 = new TokenStream();
let closure_3 = {
  decorator(children) {
    let node = children;
    const node2 = null;
    let obj = { len: 0, node: null };
    const items = [obj];
    closure_4 = "";
    return {
      children: children.children,
      node(arg0) {
        const self = this;
        closure_1 = arg0;
        node = node.node;
        const call = node.call;
        if (typeof call === "unknown") {
          node(arg0);
        } else {
          call(self, arg0);
        }
      },
      chunk(arg0) {
        closure_4 = closure_4 + arg0;
        if (obj.node !== node2) {
          obj = { len: arg0.length, node: node2 };
          items.push(obj);
        } else {
          tmp.len = tmp.len + arg0.length;
        }
      },
      result() {
        return prepareTokens(closure_4, items);
      }
    };
  }
};

export default (str, generate) => {
  if (typeof str === "string") {
    let generateResult = prepareTokens(str, null);
  } else {
    generateResult = generate.generate(str, closure_3);
  }
  return generateResult;
};