// discord_app/hooks/useRequest.tsx
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import size from "../../_runtime/metro/00002__.js";

let closure_3, message;

const result = size.fileFinishedImporting("hooks/useRequest.tsx");

export default function useRequest(archiveSubscriptionListing) {
  let closure_1;
  let closure_2;
  let first;
  let first1;
  let closure_0 = archiveSubscriptionListing;
  [first, closure_1] = react.useState(false);
  [first1, closure_2] = react.useState(null);
  let items = [archiveSubscriptionListing];
  const items1 = [
    react.useCallback(
      _asyncToGenerator(async () => {
        let closure_0 = [...arguments];
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        const iter = (async function (arg0) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = tmp;
                  c5 = 1;
                  c6 = 1;
                  return { value: "Set", done: true };
                }
              } else if (1 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  c4 = 2;
                  closure_130_2(null);
                  closure_130_1(true);
                  const items = [];
                  HermesBuiltin.arraySpread(items, closure_0, 0);
                  message = HermesBuiltin.apply(closure_130_0, items, undefined);
                  c5 = 4;
                  c6 = 1;
                  return { value: message, done: false };
                }
              } else if (2 === c5) {
                c4 = 0;
                message = closure_130_1(false);
                throw closure_3;
              } else if (3 === c5) {
                c4 = 1;
                message = closure_3;
                message = message.message;
                const intl = closure_0(closure_2[3]).intl;
                if (message !== intl.string(closure_0(closure_2[3]).t.N2yb9a)) {
                  let tmp29;
                  message = closure_130_2;
                  if (message instanceof message(closure_2[4])) {
                    tmp29 = message;
                  } else {
                    const self = this;
                    const self2 = this;
                    tmp29 = new message(closure_2[4])(message);
                  }
                  message(tmp29);
                }
                c4 = 0;
                closure_130_1(false);
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_1(false);
                c6 = 3;
                return { value, done: true };
              } else {
                c4 = 0;
                closure_130_1(false);
                c6 = 3;
                return { value, done: true };
              }
            } catch (tmp51) {
              closure_3 = tmp51;
              if (0 === c4) {
                c6 = 3;
                throw tmp51;
              } else if (1 === tmp53) {
                c5 = 2;
              } else {
                c5 = 3;
              }
            }
          }
        })();
        iter.next();
        return iter;
      }),
      items,
    ),
    { loading: first, error: first1 },
  ];
  return items1;
}
