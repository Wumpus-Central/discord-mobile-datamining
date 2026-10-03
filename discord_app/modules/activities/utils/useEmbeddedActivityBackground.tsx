// === Module 9149: useEmbeddedActivityBackground ===

// Module 9149 (useEmbeddedActivityBackground)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = ["embedded_cover", "embedded_background"];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(names[3]).c(13);
  applicationId = applicationId.applicationId;
  ({ size, names, format } = applicationId);
  if (undefined === names) {
    names = ref;
  }
  let str = "png";
  if (undefined !== format) {
    str = format;
  }
  let obj = applicationId(names[3]);
  const tmp = applicationId;
  const tmp2 = names;
  [tmp5, _slicedToArray] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  noop = _slicedToArray(noop.useState(true), 2)[1];
  if (cResult[0] === applicationId) {
    if (cResult[1] === tmp5) {
      if (cResult[2] === str) {
        if (cResult[3] === size) {
          let tmp8 = cResult[4];
        }
        let str2 = "loading";
        if (!tmp7) {
          let str3 = "not-found";
          if (null != tmp8) {
            str3 = "fetched";
          }
          str2 = str3;
        }
        if (cResult[5] !== names) {
          const fn = function k() {
            closure_4.current = names;
          };
          cResult[5] = names;
          cResult[6] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[6];
        }
        const effect = obj2.useEffect(tmp10);
        if (cResult[7] !== applicationId) {
          const fn2 = function y() {
            const current = ref.current;
            if (null != current) {
              const assets = applicationId(names[4]).getAssets(tmp);
              assets.then((result) => {
                closure_3(false);
                const entries = Object.entries(result);
                const obj = entries[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp5 = _slicedToArray(tmp3, 2);
                  [r10020, tmp6] = tmp5;
                  if (null != tmp6) {
                    if ("" !== tmp6.id) {
                      if (current.includes(tmp6.name)) {
                        let tmp12 = closure_2_2(tmp6.id);
                        obj.return();
                      }
                    }
                  }
                  continue;
                }
              });
              let obj = applicationId(names[4]);
            }
          };
          const items = [applicationId];
          cResult[7] = applicationId;
          cResult[8] = fn2;
          cResult[9] = items;
          let tmp13 = items;
          let tmp12 = fn2;
        } else {
          tmp12 = cResult[8];
          tmp13 = cResult[9];
        }
        const effect1 = obj2.useEffect(tmp12, tmp13);
        if (cResult[10] === tmp8) {
          if (cResult[11] === str2) {
            let tmp15 = cResult[12];
          }
          return tmp15;
        }
        const obj3 = { url: tmp8, state: str2 };
        cResult[10] = tmp8;
        cResult[11] = str2;
        cResult[12] = obj3;
        tmp15 = obj3;
        ref = obj2.useRef(names);
      }
    }
  }
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  const assetImage = tmp(tmp2[4]).getAssetImage(applicationId, tmp5, size, str);
  cResult[0] = applicationId;
  cResult[1] = tmp5;
  cResult[2] = str;
  cResult[3] = size;
  cResult[4] = assetImage;
  tmp8 = assetImage;
}) : ((applicationId) => {
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
  noop = undefined;
  ref = undefined;
  [tmp2, c2] = noop.useState(null);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  noop = tmp3[1];
  const tmp = _slicedToArray(noop.useState(null), 2);
  const url = applicationId(names[4]).getAssetImage(applicationId, tmp2, size, str);
  state = "loading";
  if (!tmp3[0]) {
    let str3 = "not-found";
    if (null != url) {
      str3 = "fetched";
    }
    state = str3;
  }
  ref = obj.useRef(names);
  const effect = obj.useEffect(() => {
    closure_4.current = names;
  });
  const items = [applicationId];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const assets = applicationId(names[4]).getAssets(tmp);
      assets.then((result) => {
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
      let obj = applicationId(names[4]);
    }
  }, items);
  return { url, state };
});