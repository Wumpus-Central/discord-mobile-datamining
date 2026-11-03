// discord_app/modules/conjure/chat/native/openConjureNativeImages.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function measure(arg0) {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    let size = Image.getSize(
      closure_0,
      (width, height) => {
        if (width > 0) {
          if (height > 0) {
            const size = { width, height };
            let tmp3 = size;
          }
          return tmp(tmp3);
        }
        tmp3 = closure_2_4;
      },
      () => closure_0(closure_2_4),
    );
  });
}
let closure_6 = async function _openConjureNativeImages(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = closure_0;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          c5 = 1;
          c6 = 2;
          c7 = 1;
          let obj4 = {
            value: Promise.all(
              dependencyMap.map(
                (() => {
                  closure_0 = closure_1_2(function* (arg0, arg1) {
                    if (c6 === 2) {
                      c6 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp4 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "HermesInternal", done: null };
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
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_4 = tmp5;
                            closure_3 = tmp2;
                            closure_131_0 = undefined;
                            closure_131_1 = undefined;
                            closure_131_2 = undefined;
                            ({ id: closure_131_0, alt: closure_131_1 } = closure_0);
                            closure_131_2 = closure_1;
                            closure_131_3 = undefined;
                            c5 = 1;
                            c6 = 1;
                            return { value: "flexDirection", done: true };
                          }
                        } else if (1 === tmp5) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c6 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            c5 = 2;
                            c6 = 1;
                            const obj5 = {
                              value: closure_0(closure_2_1[2]).getAttachmentUrl(closure_0, closure_131_0),
                              done: false,
                            };
                            return obj5;
                          }
                        } else if (2 === tmp5) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c6 = 3;
                            const obj7 = { value, done: true };
                            return obj7;
                          } else {
                            closure_131_3 = value;
                            const obj8 = { uri: closure_131_3, mediaIndex: closure_131_2 };
                            c5 = 3;
                            c6 = 1;
                            const obj9 = { value: closure_2_5(closure_131_3), done: false };
                            return obj9;
                          }
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c6 = 3;
                          const obj10 = { value, done: true };
                          return obj10;
                        } else {
                          const merged = Object.assign(value);
                          obj8.accessoryType = "embed";
                          obj8.description = closure_131_1;
                          obj8.disableDownload = true;
                          c6 = 3;
                          const obj = { value: obj8, done: true };
                          return obj;
                        }
                      } catch (tmp27) {
                        c6 = tmp;
                        throw tmp27;
                      }
                    }
                  });
                  return function () {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                })(),
              ),
            ),
            done: false,
          };
          return obj4;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        let obj5 = { value, done: true };
        return obj5;
      } else {
        closure_131_2 = value;
        c5 = 0;
        const obj6 = {
          initialSources: closure_131_2,
          initialIndex: null,
          analyticsSource: "ConjureChat",
          shareable: false,
          disableDownload: true,
          disableMediaOverlayButton: true,
          disableMediaOverlayFooter: true,
        };
        const _Math = Math;
        obj6.initialIndex = Math.max(0, closure_131_1);
        closure_132_0(closure_132_1[3]).openMediaModal(obj6);
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp18;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Image = fn(17).Image;
let closure_4 = { width: 1280, height: 800 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/openConjureNativeImages.tsx");

export function openConjureNativeImages() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
