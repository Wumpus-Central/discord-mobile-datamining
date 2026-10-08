// discord_app/design/components/Tooltip/native/useTooltipPosition.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltipPosition.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTooltipPosition(arg0, arg1, arg2, arg3, arg4) {
      const cResult = c.c(20);
      let num = 0;
      if (undefined !== arg4) {
        num = arg4;
      }
      let height = arg0;
      if (null != arg0) {
        let height2 = arg1;
        if (null != arg1) {
          let tmp5 = tmp4;
          if ("left" !== arg3) {
            tmp5 = "right" === arg3;
          }
          if ("top" === arg3) {
            let str4 = "start";
          } else {
            str4 = "end";
          }
          let str5 = "center";
          let str6 = "center";
          if (tmp5) {
            str6 = str4;
          }
          let height3 = arg2;
          let width = arg2.x - height2.x;
          if (cResult[1] === num) {
            if (cResult[2] === height2.width) {
              if (cResult[3] === str6) {
                if (cResult[4] === width) {
                  if (cResult[5] === height3.width) {
                    if (cResult[6] === height.width) {
                      let adjustment = cResult[7];
                      if (!tmp5) {
                        str5 = str4;
                      }
                      const diff = height3.y - height2.y;
                      if (cResult[8] === num) {
                        if (cResult[9] === height2.height) {
                          if (cResult[10] === str5) {
                            if (cResult[11] === diff) {
                              if (cResult[12] === height3.height) {
                                if (cResult[13] === height.height) {
                                  let position = cResult[14];
                                  if (cResult[15] === adjustment.adjustment) {
                                    if (cResult[16] === adjustment.position) {
                                      if (cResult[17] === position.adjustment) {
                                      }
                                    }
                                  }
                                  const obj2 = {
                                    tooltipX: adjustment.position,
                                    tooltipY: position.position,
                                    adjustmentX: adjustment.adjustment,
                                    adjustmentY: position.adjustment,
                                  };
                                  cResult[15] = adjustment.adjustment;
                                  cResult[16] = adjustment.position;
                                  adjustment = position.adjustment;
                                  cResult[17] = adjustment;
                                  position = position.position;
                                  cResult[18] = position;
                                  cResult[19] = obj2;
                                }
                              }
                            }
                          }
                        }
                      }
                      let height4 = height3.height;
                      const height5 = height.height;
                      const height6 = height2.height;
                      if ("start" === str5) {
                        const obj3 = { position: diff - height5 - num, adjustment: 0 };
                        let obj4 = obj3;
                        cResult[8] = num;
                        height2 = height2.height;
                        cResult[9] = height2;
                        cResult[10] = str5;
                        cResult[11] = diff;
                        height3 = height3.height;
                        cResult[12] = height3;
                        height = height.height;
                        cResult[13] = height;
                        cResult[14] = obj4;
                      } else if ("end" !== str5) {
                        const diff1 = diff + height4 / 2 - height5 / 2;
                        if (diff1 < 12) {
                          let num14 = 12 - diff1;
                        } else {
                          num14 = 0;
                          if (diff1 + height5 > height6 - 12) {
                            num14 = height6 - diff1 - height5 - 12;
                          }
                        }
                        obj4 = { position: diff1 + num14, adjustment: num14 };
                      }
                      const obj5 = { position: null, adjustment: 0 };
                      height4 = diff + height4 + num;
                      obj5.position = height4;
                      obj4 = obj5;
                    }
                  }
                }
              }
            }
          }
          let width2 = height3.width;
          const width3 = height.width;
          const width4 = height2.width;
          if ("start" === str6) {
            const obj6 = { position: width - width3 - num, adjustment: 0 };
            let obj7 = obj6;
            cResult[1] = num;
            cResult[2] = height2.width;
            cResult[3] = str6;
            cResult[4] = width;
            cResult[5] = height3.width;
            width = height.width;
            cResult[6] = width;
            cResult[7] = obj7;
          } else if ("end" !== str6) {
            const diff2 = width + width2 / 2 - width3 / 2;
            if (diff2 < 12) {
              let num4 = 12 - diff2;
            } else {
              num4 = 0;
              if (diff2 + width3 > width4 - 12) {
                num4 = width4 - diff2 - width3 - 12;
              }
            }
            obj7 = { position: diff2 + num4, adjustment: num4 };
          }
          const obj8 = { position: null, adjustment: 0 };
          width2 = width + width2 + num;
          obj8.position = width2;
          obj7 = obj8;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
        cResult[0] = obj9;
        let first = obj9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function useTooltipPosition(arg0, arg1, arg2, arg3) {
      closure_0 = arg0;
      closure_1 = arg1;
      const styles = arg2;
      closure_3 = arg3;
      let num = arg4;
      if (arg4 === undefined) {
        num = 0;
      }
      const items = [arg3, arg0, arg2, arg1, num];
      return noop.useMemo(() => {
        const size = closure_0;
        if (null != closure_0) {
          const size2 = closure_1;
          if (null != closure_1) {
            let tmp = tmp9;
            if ("left" !== closure_3) {
              tmp = "right" === closure_3;
            }
            if ("top" === closure_3) {
              let str3 = "start";
            } else {
              str3 = "end";
            }
            let str4 = "center";
            let str5 = "center";
            if (tmp) {
              str5 = str3;
            }
            const diff = styles.x - size2.x;
            const width = styles.width;
            const width2 = size.width;
            const width3 = size2.width;
            if ("start" === str5) {
              const obj2 = { position: diff - width2 - tmp4, adjustment: 0 };
              let obj = obj2;
            } else if ("end" === str5) {
              const obj3 = { position: diff + width + tmp4, adjustment: 0 };
              obj = obj3;
            } else {
              const diff1 = diff + width / 2 - width2 / 2;
              if (diff1 < 12) {
                let num3 = 12 - diff1;
              } else {
                num3 = 0;
                if (diff1 + width2 > width3 - 12) {
                  num3 = width3 - diff1 - width2 - 12;
                }
              }
              obj = { position: diff1 + num3, adjustment: num3 };
            }
            if (!tmp) {
              str4 = str3;
            }
            const diff2 = styles.y - size2.y;
            const height = styles.height;
            const height2 = size.height;
            const height3 = size2.height;
            if ("start" === str4) {
              const obj4 = { position: diff2 - height2 - tmp4, adjustment: 0 };
              let obj6 = obj4;
            } else if ("end" === str4) {
              const obj5 = { position: diff2 + height + tmp4, adjustment: 0 };
              obj6 = obj5;
            } else {
              const diff3 = diff2 + height / 2 - height2 / 2;
              if (diff3 < 12) {
                let num6 = 12 - diff3;
              } else {
                num6 = 0;
                if (diff3 + height2 > height3 - 12) {
                  num6 = height3 - diff3 - height2 - 12;
                }
              }
              obj6 = { position: diff3 + num6, adjustment: num6 };
            }
            const obj7 = {
              tooltipX: obj.position,
              tooltipY: obj6.position,
              adjustmentX: obj.adjustment,
              adjustmentY: obj6.adjustment,
            };
            return obj7;
          }
        }
        return { tooltipX: 0, tooltipY: 0, adjustmentX: 0, adjustmentY: 0 };
      }, items);
    };
