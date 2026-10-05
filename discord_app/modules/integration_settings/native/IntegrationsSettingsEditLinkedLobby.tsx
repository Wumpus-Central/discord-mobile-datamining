// discord_app/modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  screenContainer: obj2,
  header: { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 },
  divider: size,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
size = { height: 1, width: 48, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (channel) {
      let first;
      let items1;
      let items2;
      let items3;
      let linked_at;
      let obj13;
      let onPress;
      let tmp17;
      const tmp = channel;
      let obj = channel(navigation[7]);
      const cResult = obj.c(47);
      channel = channel.channel;
      const numScreensToPop = channel.numScreensToPop;
      const obj2 = channel(navigation[8]);
      const token = obj2.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
      const tmp6 = closure_9();
      const obj3 = channel(navigation[9]);
      navigation = obj3.useNavigation();
      const tmp8 = numScreensToPop(navigation[10]);
      const analyticsLocations = tmp8(numScreensToPop(navigation[11]).EDIT_CHANNEL_SYNCING).analyticsLocations;
      let linkedLobby = channel.linkedLobby;
      let application_id;
      const useGetOrFetchApplication = channel(navigation[12]).useGetOrFetchApplication;
      channel(navigation[12]);
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(application_id);
      const tmp12 = numScreensToPop(navigation[13])(channel, true);
      const linkedLobby2 = channel.linkedLobby;
      if (linkedLobby2 != null) {
        linked_at = linkedLobby2.linked_at;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [onPress];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      const linkedLobby3 = channel.linkedLobby;
      let linked_by;
      const tmp15 = cResult[1];
      if (linkedLobby3 != null) {
        linked_by = linkedLobby3.linked_by;
      }
      if (tmp15 !== linked_by) {
        const linkedLobby4 = channel.linkedLobby;
        let linked_by1;
        if (linkedLobby4 != null) {
          linked_by1 = linkedLobby4.linked_by;
        }
        const fn = function h() {
          const linkedLobby = channel.linkedLobby;
          let linked_by;
          const getUser = UserStore.getUser;
          if (linkedLobby != null) {
            linked_by = linkedLobby.linked_by;
          }
          return getUser(linked_by);
        };
        cResult[1] = linked_by1;
        cResult[2] = fn;
        tmp17 = fn;
      } else {
        tmp17 = cResult[2];
      }
      const tmpResult = tmp(navigation[14]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp17);
      if (cResult[3] === navigation) {
        let tmp20;
        if (cResult[4] === numScreensToPop) {
          tmp20 = cResult[5];
        }
        let str;
        const id = channel.id;
        const tmp4Result = numScreensToPop(navigation[15]);
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        const tmp4ResultResult = tmp4Result(id, str, tmp20);
        if (cResult[6] === analyticsLocations) {
          if (cResult[7] === channel.id) {
            let tmp23;
            if (cResult[8] === stateFromStores) {
              tmp23 = cResult[9];
            }
            onPress = tmp23;
            let tmp24 = null;
            if (null != linked_at) {
              let formatResult;
              if (cResult[10] === linked_at) {
                if (cResult[11] === stateFromStores) {
                  let tmp25;
                  if (cResult[12] === tmp23) {
                    tmp25 = cResult[13];
                  }
                  tmp24 = tmp25;
                }
              }
              const _Date = Date;
              const self = this;
              const self2 = this;
              const date = new Date(linked_at);
              if (null != stateFromStores) {
                const intl2 = tmp(tmp2[17]).intl;
                const obj4 = {
                  username: stateFromStores.username,
                  usernameHook(children, id) {
                    const obj = { onPress, variant: "text-sm/semibold", color: "text-strong", children };
                    return metroRequire(Text_Text.Text, obj, id);
                  },
                  linkedAtDate: date,
                };
                formatResult = intl2.format(tmp(tmp2[17]).t.uV2AkA, obj4);
              } else {
                const intl = tmp(tmp2[17]).intl;
                const obj5 = { linkedAtDate: date };
                formatResult = intl.formatToPlainString(tmp(tmp2[17]).t.EyygeM, obj5);
              }
              class I {
                constructor() {
                  if (null != stateFromStores) {
                    const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
                    showUserProfileActionSheetDefault(obj);
                  }
                }
              }
              cResult[10] = linked_at;
              cResult[11] = stateFromStores;
              cResult[12] = tmp23;
              cResult[13] = formatResult;
              tmp25 = formatResult;
            }
            if (null == getOrFetchApplication) {
              return null;
            } else {
              let tmp30;
              let tmp31;
              const _Symbol2 = Symbol;
              const screenContainer = tmp6.screenContainer;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { paddingTop: 16 };
                cResult[14] = obj6;
                tmp30 = obj6;
              } else {
                tmp30 = cResult[14];
              }
              if (cResult[15] !== token) {
                const obj7 = { paddingHorizontal: token };
                cResult[15] = token;
                cResult[16] = obj7;
                tmp31 = obj7;
              } else {
                tmp31 = cResult[16];
              }
              if (cResult[17] === getOrFetchApplication.icon) {
                let tmp33;
                let tmp35;
                if (cResult[18] === getOrFetchApplication.id) {
                  tmp33 = cResult[19];
                }
                if (cResult[20] !== tmp33) {
                  const obj8 = { source: tmp33, size: tmp(navigation[20]).AvatarSizes.XXLARGE };
                  const Avatar = tmp(tmp2[20]).Avatar;
                  const tmp37 = closure_6(Avatar, obj8);
                  cResult[20] = tmp33;
                  class I {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj = {
                          userId: tmp.id,
                          channelId: channel.id,
                          sourceAnalyticsLocations: analyticsLocations,
                        };
                        showUserProfileActionSheetDefault(obj);
                      }
                    }
                  }
                  cResult[21] = tmp37;
                  tmp35 = tmp37;
                } else {
                  tmp35 = cResult[21];
                }
                if (cResult[22] !== getOrFetchApplication.name) {
                  const obj9 = {
                    variant: "text-md/medium",
                    color: "mobile-text-heading-primary",
                    children: getOrFetchApplication.name,
                  };
                  cResult[22] = getOrFetchApplication.name;
                  cResult[23] = closure_6(tmp(navigation[18]).Text, obj9);
                  closure_6(tmp(navigation[18]).Text, obj9);
                  class I {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj = {
                          userId: tmp.id,
                          channelId: channel.id,
                          sourceAnalyticsLocations: analyticsLocations,
                        };
                        showUserProfileActionSheetDefault(obj);
                      }
                    }
                  }
                }
                if (cResult[24] === tmp24) {
                  let tmp41;
                  if (cResult[25] === tmp6.divider) {
                    tmp41 = cResult[26];
                  }
                  if (cResult[27] === tmp6.header) {
                    if (cResult[28] === tmp35) {
                      if (cResult[29] === tmp38) {
                        let tmp47;
                        let tmp51;
                        let tmp56;
                        let tmp58;
                        if (cResult[30] === tmp41) {
                          tmp47 = cResult[31];
                        }
                        if (cResult[32] !== tmp12) {
                          const intl3 = tmp(tmp2[17]).intl;
                          const obj10 = { channelName: tmp12 };
                          cResult[32] = tmp12;
                          const formatResult1 = intl3.format(tmp(navigation[17]).t.DA9v5F, obj10);
                          class I {
                            constructor() {
                              if (null != stateFromStores) {
                                const obj = {
                                  userId: tmp.id,
                                  channelId: channel.id,
                                  sourceAnalyticsLocations: analyticsLocations,
                                };
                                showUserProfileActionSheetDefault(obj);
                              }
                            }
                          }
                          tmp51 = formatResult1;
                        } else {
                          tmp51 = cResult[33];
                        }
                        if (cResult[34] !== tmp51) {
                          const obj11 = { variant: "text-sm/normal", color: "text-default", children: tmp51 };
                          cResult[34] = tmp51;
                          cResult[35] = closure_6(tmp(navigation[18]).Text, obj11);
                          closure_6(tmp(navigation[18]).Text, obj11);
                          class I {
                            constructor() {
                              if (null != stateFromStores) {
                                const obj = {
                                  userId: tmp.id,
                                  channelId: channel.id,
                                  sourceAnalyticsLocations: analyticsLocations,
                                };
                                showUserProfileActionSheetDefault(obj);
                              }
                            }
                          }
                        }
                        const _Symbol = Symbol;
                        if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl4 = tmp(tmp2[17]).intl;
                          const stringResult = intl4.string(tmp(navigation[17]).t.LLWaxQ);
                          cResult[36] = stringResult;
                          tmp56 = stringResult;
                        } else {
                          tmp56 = cResult[36];
                        }
                        if (cResult[37] !== tmp4ResultResult) {
                          const obj12 = { hasIcons: false, children: closure_6(tmp(navigation[22]).TableRow, obj13) };
                          const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
                          obj13 = { label: tmp56, variant: "danger", onPress: tmp4ResultResult };
                          const tmp60 = closure_6(TableRowGroup, obj12);
                          class I {
                            constructor() {
                              if (null != stateFromStores) {
                                const obj = {
                                  userId: tmp.id,
                                  channelId: channel.id,
                                  sourceAnalyticsLocations: analyticsLocations,
                                };
                                showUserProfileActionSheetDefault(obj);
                              }
                            }
                          }
                          cResult[37] = tmp4ResultResult;
                          cResult[38] = tmp60;
                          tmp58 = tmp60;
                        } else {
                          tmp58 = cResult[38];
                        }
                        if (cResult[39] === tmp47) {
                          if (cResult[40] === tmp53) {
                            if (cResult[41] === tmp58) {
                              let tmp61;
                              if (cResult[42] === tmp31) {
                                tmp61 = cResult[43];
                              }
                              if (cResult[44] === tmp6.screenContainer) {
                                let tmp63;
                                if (cResult[45] === tmp61) {
                                  tmp63 = cResult[46];
                                }
                                return tmp63;
                              }
                              const obj14 = { style: screenContainer, contentContainerStyle: tmp30, children: tmp61 };
                              const tmp65 = closure_6(tmp(navigation[24]).Form, obj14);
                              class I {
                                constructor() {
                                  if (null != stateFromStores) {
                                    const obj = {
                                      userId: tmp.id,
                                      channelId: channel.id,
                                      sourceAnalyticsLocations: analyticsLocations,
                                    };
                                    showUserProfileActionSheetDefault(obj);
                                  }
                                }
                              }
                              cResult[44] = tmp6.screenContainer;
                              cResult[45] = tmp61;
                              cResult[46] = tmp65;
                              tmp63 = tmp65;
                            }
                          }
                        }
                        class I {
                          constructor() {
                            if (null != stateFromStores) {
                              const obj = {
                                userId: tmp.id,
                                channelId: channel.id,
                                sourceAnalyticsLocations: analyticsLocations,
                              };
                              showUserProfileActionSheetDefault(obj);
                            }
                          }
                        }
                        const obj15 = {
                          spacing: numScreensToPop(navigation[5]).space.PX_24,
                          style: tmp31,
                          children: items1,
                        };
                        const Stack = tmp(tmp2[23]).Stack;
                        items1 = [tmp47, tmp53, tmp58];
                        const tmp62 = closure_8(Stack, obj15);
                        cResult[39] = tmp47;
                        cResult[40] = tmp53;
                        cResult[41] = tmp58;
                        cResult[42] = tmp31;
                        cResult[43] = tmp62;
                        tmp61 = tmp62;
                      }
                    }
                  }
                  const obj16 = { style: tmp32, children: items2 };
                  items2 = [tmp35, ,];
                  class I {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj = {
                          userId: tmp.id,
                          channelId: channel.id,
                          sourceAnalyticsLocations: analyticsLocations,
                        };
                        showUserProfileActionSheetDefault(obj);
                      }
                    }
                  }
                  items2[2] = tmp41;
                  const tmp50 = closure_8(stateFromStores, obj16);
                  cResult[27] = tmp6.header;
                  cResult[28] = tmp35;
                  cResult[29] = tmp38;
                  cResult[30] = tmp41;
                  cResult[31] = tmp50;
                  tmp47 = tmp50;
                }
                let tmp42 = null != tmp24;
                if (tmp42) {
                  const obj17 = { children: items3 };
                  items3 = [,];
                  class I {
                    constructor() {
                      if (null != stateFromStores) {
                        const obj = {
                          userId: tmp.id,
                          channelId: channel.id,
                          sourceAnalyticsLocations: analyticsLocations,
                        };
                        showUserProfileActionSheetDefault(obj);
                      }
                    }
                  }
                  const obj19 = { variant: "text-sm/medium", color: "text-subtle", children: tmp24 };
                  items3[1] = closure_6(tmp(navigation[18]).Text, obj19);
                  tmp42 = closure_8(closure_7, obj17);
                }
                cResult[24] = tmp24;
                class I {
                  constructor() {
                    if (null != stateFromStores) {
                      const obj = {
                        userId: tmp.id,
                        channelId: channel.id,
                        sourceAnalyticsLocations: analyticsLocations,
                      };
                      showUserProfileActionSheetDefault(obj);
                    }
                  }
                }
                cResult[25] = tmp6.divider;
                cResult[26] = tmp42;
                tmp41 = tmp42;
              }
              const obj20 = { id: null, icon: getOrFetchApplication.icon };
              const tmp4Result2 = numScreensToPop(navigation[19]);
              class I {
                constructor() {
                  if (null != stateFromStores) {
                    const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
                    showUserProfileActionSheetDefault(obj);
                  }
                }
              }
              const applicationIconSource = tmp4Result2.getApplicationIconSource(obj20);
              cResult[17] = getOrFetchApplication.icon;
              cResult[18] = getOrFetchApplication.id;
              cResult[19] = applicationIconSource;
              tmp33 = applicationIconSource;
            }
          }
        }
        class I {
          constructor() {
            if (null != stateFromStores) {
              const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
              showUserProfileActionSheetDefault(obj);
            }
          }
        }
        cResult[6] = analyticsLocations;
        cResult[7] = channel.id;
        cResult[8] = stateFromStores;
        cResult[9] = I;
        tmp23 = I;
      }
      const fn2 = function f() {
        navigation.pop(numScreensToPop);
      };
      cResult[3] = navigation;
      cResult[4] = numScreensToPop;
      cResult[5] = fn2;
      tmp20 = fn2;
    }
  : (channel) => {
      let Stack;
      let TableRow;
      let intl;
      let intl2;
      let items4;
      let items5;
      let items6;
      let obj16;
      let obj18;
      let obj5;
      let obj6;
      let obj9;
      let tmp3Result2;
      channel = channel.channel;
      const numScreensToPop = channel.numScreensToPop;
      navigation = undefined;
      let linked_at;
      let stateFromStores;
      let callback1;
      const tmp = channel;
      let obj = channel(navigation[8]);
      const token = obj.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
      const tmp5 = closure_9();
      let obj2 = channel(navigation[9]);
      navigation = obj2.useNavigation();
      const tmp7 = numScreensToPop(navigation[10]);
      const analyticsLocations = tmp7(numScreensToPop(navigation[11]).EDIT_CHANNEL_SYNCING).analyticsLocations;
      let linkedLobby = channel.linkedLobby;
      let application_id;
      const useGetOrFetchApplication = channel(navigation[12]).useGetOrFetchApplication;
      channel(navigation[12]);
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      const getOrFetchApplication = useGetOrFetchApplication(application_id);
      const linkedLobby2 = channel.linkedLobby;
      linked_at = undefined;
      const tmp11 = tmp3(tmp2[13])(channel, true);
      if (linkedLobby2 != null) {
        linked_at = linkedLobby2.linked_at;
      }
      const items = [stateFromStores];
      const tmpResult = tmp(navigation[14]);
      stateFromStores = tmpResult.useStateFromStores(items, () => {
        const linkedLobby = channel.linkedLobby;
        let linked_by;
        const getUser = UserStore.getUser;
        if (linkedLobby != null) {
          linked_by = linkedLobby.linked_by;
        }
        return getUser(linked_by);
      });
      const items1 = [navigation, numScreensToPop];
      const callback = analyticsLocations.useCallback(() => {
        navigation.pop(numScreensToPop);
      }, items1);
      let str;
      const id = channel.id;
      const tmp3Result = numScreensToPop(navigation[15]);
      if (getOrFetchApplication != null) {
        str = getOrFetchApplication.name;
      }
      if (str == null) {
        str = "";
      }
      const items2 = [stateFromStores, analyticsLocations, channel.id];
      const tmp3ResultResult = tmp3Result(id, str, callback);
      callback1 = obj4.useCallback(() => {
        if (null != stateFromStores) {
          const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }, items2);
      const items3 = [linked_at, stateFromStores, callback1];
      const memo = obj4.useMemo(function () {
        let onPress;
        if (null == linked_at) {
          return null;
        } else {
          let formatResult;
          const _Date = Date;
          const self = this;
          const self2 = this;
          const date = new Date(linked_at);
          if (null != stateFromStores) {
            const intl2 = intl5.intl;
            const obj2 = {
              username: tmp15.username,
              usernameHook(children, arg1) {
                const obj = { onPress, variant: "text-sm/semibold", color: "text-strong", children };
                return callback1(channel(navigation[18]).Text, obj, arg1);
              },
              linkedAtDate: date,
            };
            formatResult = intl2.format(intl5.t.uV2AkA, obj2);
          } else {
            const intl = intl5.intl;
            let obj = { linkedAtDate: date };
            formatResult = intl.formatToPlainString(intl5.t.EyygeM, obj);
          }
          return formatResult;
        }
      }, items3);
      let tmp20Result = null;
      if (null != getOrFetchApplication) {
        const obj3 = {
          style: tmp5.screenContainer,
          contentContainerStyle: { paddingTop: 16 },
          children: closure_8(Stack, obj5),
        };
        const Form = tmp(tmp2[24]).Form;
        obj5 = { spacing: numScreensToPop(navigation[5]).space.PX_24, style: obj6, children: items6 };
        Stack = tmp(tmp2[23]).Stack;
        obj6 = { paddingHorizontal: token };
        const obj7 = { style: tmp5.header, children: items4 };
        const obj8 = {
          source: tmp3Result2.getApplicationIconSource(obj9),
          size: tmp(navigation[20]).AvatarSizes.XXLARGE,
        };
        const Avatar = tmp(tmp2[20]).Avatar;
        obj9 = { id: null, icon: null };
        ({ id: obj11.id, icon: obj11.icon } = getOrFetchApplication);
        tmp3Result2 = numScreensToPop(navigation[19]);
        items4 = [callback1(Avatar, obj8), ,];
        const obj10 = {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: getOrFetchApplication.name,
        };
        items4[1] = callback1(tmp(navigation[18]).Text, obj10);
        let tmp21Result = null != memo;
        if (tmp21Result) {
          const obj12 = { children: items5 };
          const obj13 = { style: tmp5.divider };
          items5 = [callback1(linked_at, obj13)];
          const obj14 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
          items5[1] = callback1(tmp(navigation[18]).Text, obj14);
          tmp21Result = closure_8(closure_7, obj12);
        }
        items4[2] = tmp21Result;
        items6 = [closure_8(linked_at, obj7), ,];
        const obj15 = {
          variant: "text-sm/normal",
          color: "text-default",
          children: intl.format(tmp(navigation[17]).t.DA9v5F, obj16),
        };
        const Text = tmp(tmp2[18]).Text;
        intl = tmp(tmp2[17]).intl;
        obj16 = { channelName: tmp11 };
        items6[1] = callback1(Text, obj15);
        const obj17 = { hasIcons: false, children: callback1(TableRow, obj18) };
        const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
        obj18 = { label: intl2.string(tmp(navigation[17]).t.LLWaxQ), variant: "danger", onPress: tmp3ResultResult };
        TableRow = tmp(tmp2[22]).TableRow;
        intl2 = tmp(tmp2[17]).intl;
        items6[2] = callback1(TableRowGroup, obj17);
        tmp20Result = tmp20(Form, obj3);
      }
      return tmp20Result;
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx",
);

export default tmp4;
