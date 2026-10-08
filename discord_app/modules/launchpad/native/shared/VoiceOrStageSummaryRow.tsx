// discord_app/modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef17127 from "../../../../../_runtime/metro/17127__.js";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginLeft: -2 },
    overflowCircle: null,
    wrapper: null,
    badge: null,
    audienceBadge: null,
  };
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    width: height,
  };
  obj.overflowCircle = size;
  obj.wrapper = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  const obj2 = {
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  };
  obj.badge = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  const obj3 = {
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  };
  obj.audienceBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceOrStageSummaryRow(audienceCount) {
        const cResult = guildId(first[6]).c(27);
        ({ users, max, guildId } = audienceCount);
        audienceCount = audienceCount.audienceCount;
        let num = 5;
        let num2 = 5;
        if (undefined !== max) {
          num2 = max;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = num2(tmp2[7])();
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        const size = first.voiceOrStageSummaryRow.size;
        wrapper = Math.max(users.length - num2, 0);
        const tmp7 = closure_6(size);
        closure_4 = tmp7;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { height: size + 4 };
          cResult[1] = obj2;
          let tmp8 = obj2;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] !== tmp7.container) {
          let items = [tmp7.container, tmp8];
          cResult[2] = tmp7.container;
          cResult[3] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === guildId) {
          if (cResult[5] === num2) {
            if (cResult[6] === wrapper) {
              if (cResult[7] === tmp7.overflowCircle) {
                if (cResult[8] === tmp7.wrapper) {
                  if (cResult[9] === users) {
                    if (cResult[17] === audienceCount) {
                      if (cResult[18] === tmp7.audienceBadge) {
                        if (cResult[19] === tmp7.badge) {
                          if (cResult[20] === tmp7.wrapper) {
                            if (cResult[21] === users.length) {
                              let tmp14 = cResult[22];
                            }
                            if (cResult[23] === tmp9) {
                              if (cResult[24] === tmp10) {
                                if (cResult[25] === tmp14) {
                                  let tmp22 = cResult[26];
                                }
                                return tmp22;
                              }
                            }
                            let obj3 = { style: tmp9, children: null };
                            let items1 = [tmp10, tmp14];
                            obj3.children = items1;
                            const tmp25 = closure_5(wrapper, obj3);
                            cResult[23] = tmp9;
                            cResult[24] = tmp10;
                            cResult[25] = tmp14;
                            cResult[26] = tmp25;
                            tmp22 = tmp25;
                          }
                        }
                      }
                    }
                    let tmp17Result = null != audienceCount && audienceCount > 0;
                    if (tmp17Result) {
                      const items2 = [tmp7.wrapper];
                      let obj4 = { style: null, children: null };
                      items2[1] = users.length > 0 && { marginLeft: -12 };
                      obj4.style = items2;
                      let obj5 = { style: null, children: null };
                      const items3 = [,];
                      ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp7);
                      obj5.style = items3;
                      let obj6 = {
                        size: guildId(tmp2[9]).Icon.Sizes.CUSTOM,
                        style: { height: 14, width: 14 },
                        source: num2(tmp2[10]),
                      };
                      const items4 = [closure_4(guildId(tmp2[9]).Icon, obj6)];
                      let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
                      items4[1] = closure_4(guildId(tmp2[8]).Text, obj7);
                      obj5.children = items4;
                      obj4.children = closure_5(wrapper, obj5);
                      tmp17Result = tmp17(tmp18, obj4);
                      const tmp19 = users.length > 0 && { marginLeft: -12 };
                    }
                    cResult[17] = audienceCount;
                    cResult[18] = tmp7.audienceBadge;
                    cResult[19] = tmp7.badge;
                    cResult[20] = tmp7.wrapper;
                    cResult[21] = users.length;
                    cResult[22] = tmp17Result;
                    tmp14 = tmp17Result;
                  }
                }
              }
            }
          }
        }
        if (cResult[11] === guildId) {
          if (cResult[12] === num2) {
            if (cResult[13] === wrapper) {
              if (cResult[14] === tmp7.overflowCircle) {
                if (cResult[15] === tmp7.wrapper) {
                  let tmp11 = cResult[16];
                }
                const mapped = users.map(tmp11);
                cResult[4] = guildId;
                cResult[num] = num2;
                cResult[6] = wrapper;
                ({ overflowCircle: tmp3[7], wrapper } = tmp7);
                cResult[8] = wrapper;
                cResult[9] = users;
                num = 10;
                cResult[10] = mapped;
              }
            }
          }
        }
        class C {
          constructor(arg0, arg1) {
            if (arg1 >= max) {
              return;
            } else {
              num3 = 1;
              if (arg1 === tmp - 1) {
                num = 0;
                if (closure_3 > 0) {
                  items = [,];
                  items[0] = closure_4.wrapper;
                  obj1 = 0 !== arg1;
                  tmp13 = jsx;
                  tmp14 = View;
                  tmp15 = closure_4;
                  if (obj1) {
                    obj1 = { marginLeft: -12 };
                  }
                  obj8 = { style: null, children: null };
                  items[1] = obj1;
                  obj8.style = items;
                  tmp16 = jsx;
                  tmp17 = View;
                  obj9 = { style: null, children: null };
                  obj9.style = tmp15.overflowCircle;
                  tmp18 = jsx;
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  obj10 = { variant: "text-xs/medium", children: null };
                  tmp21 = globalThis;
                  _HermesInternal = HermesInternal;
                  str = "+";
                  obj10.children = "+" + tmp2 + 1;
                  obj9.children = jsx(closure_0(closure_2[8]).Text, obj10);
                  obj8.children = jsx(View, obj9);
                  str2 = "overflow";
                  tmp13Result = tmp13(tmp14, obj8, "overflow");
                }
                return tmp13Result;
              }
              tmp5 = closure_4;
              items1 = [,];
              items1[0] = closure_4.wrapper;
              num2 = 0;
              obj = 0 !== arg1;
              tmp3 = jsx;
              tmp4 = View;
              if (obj) {
                obj = { marginLeft: -12 };
              }
              tmp6 = audienceCount;
              obj11 = { style: null, children: null };
              items1[1] = obj;
              obj11.style = items1;
              tmp7 = jsx;
              tmp8 = closure_0;
              tmp9 = closure_2;
              obj12 = { user: null, guildId: null, size: null };
              obj12.user = audienceCount;
              tmp10 = guildId;
              obj12.guildId = guildId;
              tmp11 = closure_2;
              obj12.size = closure_2.voiceOrStageSummaryRow.avatarSize;
              obj11.children = jsx(closure_0(closure_2[9]).Avatar, obj12);
              tmp13Result = tmp3(tmp4, obj11, arg1);
            }
            return;
          }
        }
        cResult[11] = guildId;
        cResult[12] = num2;
        cResult[13] = wrapper;
        cResult[14] = tmp7.overflowCircle;
        cResult[15] = tmp7.wrapper;
        cResult[16] = C;
        tmp11 = C;
        let obj = guildId(first[6]);
      }
    : function VoiceOrStageSummaryRow(arg0) {
        ({ users, max } = arg0);
        if (max === undefined) {
          max = 5;
        }
        ({ guildId: importDefault, audienceCount } = arg0);
        const tmp3 = getLayoutStylesDefault();
        dependencyMap = tmp3;
        const size = tmp3.voiceOrStageSummaryRow.size;
        closure_3 = Math.max(users.length - max, 0);
        const tmp4 = closure_6(size);
        closure_4 = tmp4;
        let obj = { style: null, children: null };
        let items = [tmp4.container, { height: size + 4 }];
        obj.style = items;
        let items1 = [
          users.map((user, index) => {
            if (index < max) {
              if (index === tmp - 1) {
                if (closure_3 > 0) {
                  const items = [closure_4.wrapper];
                  let obj2 = 0 !== index;
                  if (obj2) {
                    obj2 = { marginLeft: -12 };
                  }
                  const obj3 = { style: null, children: null };
                  items[1] = obj2;
                  obj3.style = items;
                  const obj4 = { style: closure_4.overflowCircle, children: null };
                  const obj5 = { variant: "text-xs/medium", children: null };
                  const _HermesInternal = HermesInternal;
                  obj5.children = "+" + tmp2 + 1;
                  obj4.children = React4(Text_Text.Text, obj5);
                  obj3.children = React4(View, obj4);
                  let tmp3Result = React4(View, obj3, "overflow");
                }
                return tmp3Result;
              }
              const items1 = [closure_4.wrapper];
              let obj = 0 !== index;
              if (obj) {
                obj = { marginLeft: -12 };
              }
              const obj6 = { style: null, children: null };
              items1[1] = obj;
              obj6.style = items1;
              const obj7 = { user, guildId, size: closure_2.voiceOrStageSummaryRow.avatarSize };
              obj6.children = React4(native.Avatar, obj7);
              tmp3Result = React4(View, obj6, index);
            }
          }),
        ];
        let tmp8Result = null != audienceCount && audienceCount > 0;
        if (tmp8Result) {
          const items2 = [tmp4.wrapper];
          let obj3 = { style: null, children: null };
          items2[1] = users.length > 0 && { marginLeft: -12 };
          obj3.style = items2;
          let obj4 = { style: null, children: null };
          const items3 = [,];
          ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
          obj4.style = items3;
          let obj5 = { size: max(1200).Icon.Sizes.CUSTOM, style: { height: 14, width: 14 }, source: _modDef17127 };
          const items4 = [closure_4(max(1200).Icon, obj5)];
          let obj6 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
          items4[1] = closure_4(max(5086).Text, obj6);
          obj4.children = items4;
          obj3.children = closure_5(tmp6, obj4);
          tmp8Result = tmp8(tmp6, obj3);
          const tmp9 = users.length > 0 && { marginLeft: -12 };
        }
        items1[1] = tmp8Result;
        obj.children = items1;
        return closure_5(closure_3, obj);
      },
);
