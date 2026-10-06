// discord_app/modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../_runtime/16848_AssetRegistry.js";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap,
  num2,
  num3,
  obj1,
  obj10,
  obj11,
  obj12,
  obj8,
  obj9,
  str,
  str2,
  tmp13,
  tmp13Result,
  tmp15,
  tmp16,
  tmp17,
  tmp18,
  tmp20,
  tmp21,
  tmp5,
  tmp7;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((height) => {
  const obj = {
    container: { flexDirection: "row", alignItems: "center", marginLeft: -2 },
    overflowCircle: size,
    wrapper: {
      borderRadius: nativeDefault.radii.round,
      borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
      borderWidth: 2,
    },
    badge: {
      borderRadius: nativeDefault.radii.round,
      paddingHorizontal: 8,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height,
    },
    audienceBadge: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  };
  size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    borderRadius: nativeDefault.radii.round,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height,
    width: height,
  };
  ({
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 2,
  });
  ({
    borderRadius: nativeDefault.radii.round,
    paddingHorizontal: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height,
  });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (audienceCount) => {
        let first;
        let guildId;
        let items1;
        let items3;
        let items4;
        let max;
        let obj5;
        let tmp10;
        let tmp11;
        let tmp9;
        let users;
        const tmp2 = first;
        let obj = guildId(first[6]);
        const cResult = obj.c(27);
        ({ users, max, guildId } = audienceCount);
        audienceCount = audienceCount.audienceCount;
        let num = 5;
        if (undefined !== max) {
          num = max;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = num(tmp2[7])();
          cResult[0] = tmp6;
          first = tmp6;
        } else {
          first = cResult[0];
        }
        size = first.voiceOrStageSummaryRow.size;
        const bound = Math.max(users.length - num, 0);
        const tmp8 = closure_6(size);
        let closure_4 = tmp8;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { height: size + 4 };
          cResult[1] = obj2;
          tmp9 = obj2;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp8.container) {
          let items = [tmp8.container, tmp9];
          cResult[2] = tmp8.container;
          cResult[3] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === guildId) {
          if (cResult[5] === num) {
            if (cResult[6] === bound) {
              if (cResult[7] === tmp8.overflowCircle) {
                if (cResult[8] === tmp8.wrapper) {
                  if (cResult[9] === users) {
                    tmp11 = cResult[10];
                  }
                  if (cResult[17] === audienceCount) {
                    if (cResult[18] === tmp8.audienceBadge) {
                      if (cResult[19] === tmp8.badge) {
                        if (cResult[20] === tmp8.wrapper) {
                          let tmp14;
                          if (cResult[21] === users.length) {
                            tmp14 = cResult[22];
                          }
                          if (cResult[23] === tmp10) {
                            if (cResult[24] === tmp11) {
                              let tmp22;
                              if (cResult[25] === tmp14) {
                                tmp22 = cResult[26];
                              }
                              return tmp22;
                            }
                          }
                          let obj3 = { style: tmp10, children: items1 };
                          items1 = [tmp11, tmp14];
                          const tmp25 = closure_5(bound, obj3);
                          cResult[23] = tmp10;
                          cResult[24] = tmp11;
                          cResult[25] = tmp14;
                          cResult[26] = tmp25;
                          tmp22 = tmp25;
                        }
                      }
                    }
                  }
                  let tmp17Result = null != audienceCount && audienceCount > 0;
                  if (tmp17Result) {
                    const items2 = [tmp8.wrapper];
                    let obj4 = { style: items2, children: closure_5(bound, obj5) };
                    const tmp19 = users.length > 0 && { marginLeft: -12 };
                    items2[1] = tmp19;
                    obj5 = { style: items3, children: items4 };
                    items3 = [,];
                    ({ badge: arr3[0], audienceBadge: arr3[1] } = tmp8);
                    let obj6 = {
                      size: guildId(tmp2[9]).Icon.Sizes.CUSTOM,
                      style: { height: 14, width: 14 },
                      source: num(tmp2[10]),
                    };
                    const Icon = guildId(tmp2[9]).Icon;
                    items4 = [closure_4(Icon, obj6)];
                    let obj7 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
                    items4[1] = closure_4(guildId(tmp2[8]).Text, obj7);
                    tmp17Result = tmp17(tmp18, obj4);
                  }
                  cResult[17] = audienceCount;
                  cResult[18] = tmp8.audienceBadge;
                  cResult[19] = tmp8.badge;
                  cResult[20] = tmp8.wrapper;
                  cResult[21] = users.length;
                  cResult[22] = tmp17Result;
                  tmp14 = tmp17Result;
                }
              }
            }
          }
        }
        if (cResult[11] === guildId) {
          if (cResult[12] === num) {
            if (cResult[13] === bound) {
              if (cResult[14] === tmp8.overflowCircle) {
                let tmp12;
                if (cResult[15] === tmp8.wrapper) {
                  tmp12 = cResult[16];
                }
                const mapped = users.map(tmp12);
                cResult[4] = guildId;
                cResult[5] = num;
                cResult[6] = bound;
                cResult[7] = tmp8.overflowCircle;
                cResult[8] = tmp8.wrapper;
                cResult[9] = users;
                cResult[10] = mapped;
                tmp11 = mapped;
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
                  Text = closure_0(closure_2[8]).Text;
                  obj10.children = "+" + tmp2 + 1;
                  obj9.children = jsx(Text, obj10);
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
        cResult[12] = num;
        cResult[13] = bound;
        cResult[14] = tmp8.overflowCircle;
        cResult[15] = tmp8.wrapper;
        cResult[16] = C;
        tmp12 = C;
      }
    : (arg0) => {
        let audienceCount;
        let closure_2;
        let guildId;
        let items;
        let items1;
        let items3;
        let items4;
        let max;
        let obj4;
        let users;
        ({ users, max } = arg0);
        if (max === undefined) {
          max = 5;
        }
        ({ guildId: importDefault, audienceCount } = arg0);
        dependencyMap = undefined;
        const tmp2 = dependencyMap;
        const tmp3 = getLayoutStylesDefault();
        dependencyMap = tmp3;
        size = tmp3.voiceOrStageSummaryRow.size;
        let closure_3 = Math.max(users.length - max, 0);
        const tmp4 = closure_6(size);
        let closure_4 = tmp4;
        let obj = { style: items, children: items1 };
        items = [tmp4.container];
        let obj2 = { height: size + 4 };
        items[1] = obj2;
        items1 = [
          users.map((user, index) => {
            let Text;
            let obj4;
            let obj5;
            let obj7;
            if (index < max) {
              if (index === tmp - 1) {
                let tmp3Result;
                if (closure_3 > 0) {
                  const items = [closure_4.wrapper];
                  const obj2 = 0 !== index && { marginLeft: -12 };
                  items[1] = obj2;
                  const obj3 = { style: items, children: React3(View, obj4) };
                  obj4 = { style: closure_4.overflowCircle, children: React3(Text, obj5) };
                  const _HermesInternal = HermesInternal;
                  obj5 = { variant: "text-xs/medium", children: "+" + tmp2 + 1 };
                  Text = Text_Text.Text;
                  tmp3Result = React3(View, obj3, "overflow");
                }
                return tmp3Result;
              }
              const items1 = [closure_4.wrapper];
              const obj = 0 !== index && { marginLeft: -12 };
              items1[1] = obj;
              const obj6 = { style: items1, children: React3(native.Avatar, obj7) };
              obj7 = { user, guildId: importDefault, size: closure_2.voiceOrStageSummaryRow.avatarSize };
              tmp3Result = React3(View, obj6, index);
            }
          }),
        ];
        let tmp8Result = null != audienceCount && audienceCount > 0;
        if (tmp8Result) {
          const items2 = [tmp4.wrapper];
          let obj3 = { style: items2, children: closure_5(tmp6, obj4) };
          const tmp9 = users.length > 0 && { marginLeft: -12 };
          items2[1] = tmp9;
          obj4 = { style: items3, children: items4 };
          items3 = [,];
          ({ badge: arr4[0], audienceBadge: arr4[1] } = tmp4);
          let obj5 = {
            size: max(1188).Icon.Sizes.CUSTOM,
            style: { height: 14, width: 14 },
            source: AssetRegistryDefault,
          };
          const Icon = max(1188).Icon;
          items4 = [closure_4(Icon, obj5)];
          let obj6 = { variant: "text-sm/bold", style: { marginLeft: 4 }, children: audienceCount };
          items4[1] = closure_4(max(4892).Text, obj6);
          tmp8Result = tmp8(tmp6, obj3);
        }
        items1[1] = tmp8Result;
        return closure_5(closure_3, obj);
      },
);
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/VoiceOrStageSummaryRow.tsx");

export default memoResult;
