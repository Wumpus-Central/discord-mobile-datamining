// discord_app/modules/activities/utils/useEmbeddedActivityBackground.tsx
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let applicationId;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_4 = ["embedded_cover", "embedded_background"];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let closure_3;
      let format;
      let names;
      let ref;
      let tmp5;
      const tmp = applicationId;
      let obj = applicationId(names[3]);
      const cResult = obj.c(13);
      applicationId = applicationId.applicationId;
      const tmp2 = names;
      ({ size, names, format } = applicationId);
      if (undefined === names) {
        names = ref;
      }
      let str = "png";
      if (undefined !== format) {
        str = format;
      }
      const tmp4 = _slicedToArray(react.useState(null), 2);
      [tmp5, _slicedToArray] = tmp4;
      [, react] = react.useState(true);
      if (cResult[0] === applicationId) {
        if (cResult[1] === tmp5) {
          if (cResult[2] === str) {
            let tmp8;
            let tmp10;
            let tmp13;
            let tmp12;
            if (cResult[3] === size) {
              tmp8 = cResult[4];
            }
            let str2 = "loading";
            if (!tmp7) {
              let str3 = "not-found";
              if (null != tmp8) {
                str3 = "fetched";
              }
              str2 = str3;
            }
            ref = obj2.useRef(names);
            if (cResult[5] !== names) {
              const fn = function k() {
                ref.current = names;
              };
              cResult[5] = names;
              cResult[6] = fn;
              tmp10 = fn;
            } else {
              tmp10 = cResult[6];
            }
            const effect = obj2.useEffect(tmp10);
            if (cResult[7] !== applicationId) {
              const fn2 = function y() {
                const current = ref.current;
                if (null != current) {
                  let obj = applicationId(names[4]);
                  const assets = obj.getAssets(tmp);
                  assets.then((result) => {
                    let tmp6;
                    closure_3(false);
                    const entries = Object.entries(result);
                    const obj = entries[Symbol.iterator]();
                    while (obj !== undefined) {
                      let tmp5 = _slicedToArray(tmp3, 2);
                      [r10020, tmp6] = tmp5;
                      if (null != tmp6) {
                        if ("" !== tmp6.id) {
                          if (current.includes(tmp6.name)) {
                            let tmp12 = _slicedToArray(tmp6.id);
                            obj.return();
                          }
                        }
                      }
                      continue;
                    }
                  });
                }
              };
              const items = [applicationId];
              cResult[7] = applicationId;
              cResult[8] = fn2;
              cResult[9] = items;
              tmp13 = items;
              tmp12 = fn2;
            } else {
              tmp12 = cResult[8];
              tmp13 = cResult[9];
            }
            const effect1 = obj2.useEffect(tmp12, tmp13);
            if (cResult[10] === tmp8) {
              let tmp15;
              if (cResult[11] === str2) {
                tmp15 = cResult[12];
              }
              return tmp15;
            }
            const obj3 = { url: tmp8, state: str2 };
            cResult[10] = tmp8;
            cResult[11] = str2;
            cResult[12] = obj3;
            tmp15 = obj3;
          }
        }
      }
      const tmpResult = tmp(tmp2[4]);
      const assetImage = tmpResult.getAssetImage(applicationId, tmp5, size, str);
      cResult[0] = applicationId;
      cResult[1] = tmp5;
      cResult[2] = str;
      cResult[3] = size;
      cResult[4] = assetImage;
      tmp8 = assetImage;
    }
  : (applicationId) => {
      let c2;
      let closure_3;
      let first;
      let names;
      let ref;
      let tmp2;
      applicationId = applicationId.applicationId;
      ({ size, names } = applicationId);
      if (names === undefined) {
        names = ref;
      }
      let str = applicationId.format;
      if (str === undefined) {
        str = "png";
      }
      _slicedToArray = undefined;
      react = undefined;
      ref = undefined;
      let obj = react;
      const tmp = _slicedToArray(react.useState(null), 2);
      [tmp2, c2] = tmp;
      [first, react] = react.useState(true);
      const obj2 = applicationId(names[4]);
      const url = obj2.getAssetImage(applicationId, tmp2, size, str);
      let state = "loading";
      if (!first) {
        let str3 = "not-found";
        if (null != url) {
          str3 = "fetched";
        }
        state = str3;
      }
      ref = obj.useRef(names);
      const effect = obj.useEffect(() => {
        ref.current = names;
      });
      const items = [applicationId];
      const effect1 = obj.useEffect(() => {
        const current = ref.current;
        if (null != current) {
          let obj = applicationId(names[4]);
          const assets = obj.getAssets(tmp);
          assets.then((result) => {
            let tmp6;
            closure_3(false);
            const entries = Object.entries(result);
            const obj = entries[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp5 = _slicedToArray(tmp3, 2);
              [r10020, tmp6] = tmp5;
              if (null != tmp6) {
                if ("" !== tmp6.id) {
                  if (current.includes(tmp6.name)) {
                    let tmp12 = c2(tmp6.id);
                    obj.return();
                  }
                }
              }
              continue;
            }
          });
        }
      }, items);
      return { url, state };
    };
const result = size.fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default tmp2;
