// discord_app/modules/links/native/handleContentLinking.tsx
import Constants from "../../../Constants.tsx";
import PostConnectionCallbackStore from "../../gateway/PostConnectionCallbackStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = function _handleContentLinking() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let tmp42;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let safe;
        let navigationReplace;
        let waitForConnection;
        let closure_9;
        let skipMessageFetch;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            ({ guildId: c0, channelId: c1, navigationSettings: c2, messageId: c3, summaryId: c4 } = closure_0);
            safe = undefined;
            navigationReplace = undefined;
            waitForConnection = undefined;
            closure_9 = undefined;
            skipMessageFetch = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const obj12 = closure_130_1(closure_130_2[3]);
              obj12.popAll();
              safe = c2.safe;
              navigationReplace = c2.navigationReplace;
              const tmp6 = undefined === navigationReplace || navigationReplace;
              navigationReplace = tmp6;
              waitForConnection = c2.waitForConnection;
              const tmp10 = undefined === waitForConnection || waitForConnection;
              closure_9 = tmp10;
              skipMessageFetch = c2.skipMessageFetch;
              const tmp14 = closure_9;
              if (tmp14) {
                if (closure_130_6 != null) {
                  closure_130_6();
                }
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  function o() {
                    const error = new Error("superseded");
                    return closure_1(error);
                  }
                  closure_4(() => {
                    c6 = null;
                    closure_0();
                  });
                });
                c3 = 2;
                c4 = 1;
                const obj7 = { value: promise, done: false };
                return obj7;
              }
            }
          } else {
            if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            const tmp30 = null != c1 && null != c4;
            if (tmp30) {
              const obj5 = closure_130_1(closure_130_2[6]);
              obj5.setSelectedSummary(c1, c4);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
          if (safe) {
            const obj9 = { navigationReplace, openChannel: true, skipMessageFetch };
            c3 = 3;
            c4 = 1;
            const obj10 = { value: tmp42(closure_130_5.CHANNEL(c0, c1, c3), obj9), done: false };
            tmp42 = closure_130_1(closure_130_2[4]);
            return obj10;
          } else {
            const obj11 = { navigationReplace, openChannel: true, skipMessageFetch };
            const obj3 = closure_130_0(closure_130_2[5]);
            obj3.transitionTo(closure_130_5.CHANNEL(c0, c1, c3), obj11);
          }
        }
      } catch (tmp56) {
        c4 = 3;
        throw tmp56;
      }
    }
  });
  return obj(...arguments);
};
PostConnectionCallbackStore.addPostConnectionCallback;
const Routes = Constants.Routes;
let c6 = null;
const result = size.fileFinishedImporting("modules/links/native/handleContentLinking.tsx");

export default function handleContentLinking() {
  return obj(...arguments);
}
