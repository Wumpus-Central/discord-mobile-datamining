// discord_app/modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import useAppChannelApplication from "../../../app_channels/useAppChannelApplication.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import ConjureRemixSheet from "../../remix/native/ConjureRemixSheet.tsx";
import openConjureHomeScreenDefault from "../../home/native/openConjureHomeScreen.tsx";
import openConjureAppChannelSheet from "openConjureAppChannelSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelMemberCountStore from "../../../channel/ChannelMemberCountStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const ConjureRemixSheetDefault = ConjureRemixSheet;

require = fn;
const Constants = fn(1084);
({ ChannelSettingsSections: closure_7, InstantInviteSources: closure_8, Permissions: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5005);
let obj = {
  content: { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 },
  centered: { textAlign: "center" },
};
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppChannelSheetHeader(channel) {
      const cResult = c.c(9);
      channel = channel.channel;
      const tmp4 = closure_13();
      const tmp6 = useChannelNameDefault(channel);
      const appChannelApplication = useAppChannelApplication.useAppChannelApplication(channel);
      if (cResult[0] === tmp6) {
        if (cResult[1] === tmp4.centered) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === appChannelApplication) {
          if (cResult[4] === tmp4.centered) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] === tmp8) {
            if (cResult[7] === tmp10) {
              let tmp13 = cResult[8];
            }
            return tmp13;
          }
          const obj3 = { spacing: nativeDefault.space.PX_4, align: "center", children: null };
          const items = [tmp8, tmp10];
          obj3.children = items;
          const tmp15 = closure_1_11(Stack_Stack.Stack, obj3);
          cResult[6] = tmp8;
          cResult[7] = tmp10;
          cResult[8] = tmp15;
          tmp13 = tmp15;
        }
        let tmp11 = null;
        if (null != appChannelApplication) {
          const obj4 = {
            variant: "text-sm/medium",
            color: "text-muted",
            lineClamp: 1,
            style: tmp4.centered,
            children: appChannelApplication.name,
          };
          tmp11 = v65535(Text_Text.Text, obj4);
        }
        cResult[3] = appChannelApplication;
        cResult[4] = tmp4.centered;
        cResult[5] = tmp11;
        tmp10 = tmp11;
      }
      const tmp9 = v65535(Text_Text.Heading, {
        variant: "heading-lg/bold",
        lineClamp: 1,
        style: tmp4.centered,
        children: tmp6,
      });
      cResult[0] = tmp6;
      cResult[1] = tmp4.centered;
      cResult[2] = tmp9;
      tmp8 = tmp9;
      const obj5 = { variant: "heading-lg/bold", lineClamp: 1, style: tmp4.centered, children: tmp6 };
    }
  : function ConjureAppChannelSheetHeader(channel) {
      channel = channel.channel;
      const tmp = closure_13();
      const tmp3 = useChannelNameDefault(channel);
      const appChannelApplication = useAppChannelApplication.useAppChannelApplication(channel);
      const obj2 = { spacing: nativeDefault.space.PX_4, align: "center", children: null };
      const items = [
        v65535(Text_Text.Heading, { variant: "heading-lg/bold", lineClamp: 1, style: tmp.centered, children: tmp3 }),
      ];
      let tmp7Result = null;
      if (null != appChannelApplication) {
        const obj4 = {
          variant: "text-sm/medium",
          color: "text-muted",
          lineClamp: 1,
          style: tmp.centered,
          children: appChannelApplication.name,
        };
        tmp7Result = v65535(Text_Text.Text, obj4);
      }
      items[1] = tmp7Result;
      obj2.children = items;
      return closure_1_11(Stack_Stack.Stack, obj2);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSheetAction(arg0) {
      _require = arg0;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg0) {
        let fn = null;
        if (null != arg0) {
          fn = () => {
            const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
            closure_0();
          };
        }
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function useSheetAction(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        let fn = null;
        if (null != closure_0) {
          fn = () => {
            const result = closure_0(dependencyMap[14]).closeConjureAppChannelSheet();
            closure_1_0();
          };
        }
        return fn;
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureAppChannelSheetContent(channel) {
      const cResult = channel(remixProject[9]).c(75);
      channel = channel.channel;
      let guild_id = channel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      let obj = channel(remixProject[9]);
      const appChannelAppActions = channel(remixProject[15]).useAppChannelAppActions(channel);
      remixProject = guild_id(tmp2[16])(channel, true).remixProject;
      const tmpResult = channel(remixProject[15]);
      const isConjureMobileEnabled = channel(remixProject[17]).useIsConjureMobileEnabled(
        null != remixProject,
        "ConjureAppChannelSheet",
      );
      const tmp7 = guild_id(remixProject[18])(channel);
      noop = tmp7;
      const tmpResult5 = channel(remixProject[17]);
      const isConjureMobileEnabled1 = channel(remixProject[17]).useIsConjureMobileEnabled(
        null != tmp7,
        "ConjureAppChannelSheet",
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function p() {
          return {
            canManageChannel: PermissionStore.can(constants2.MANAGE_CHANNELS, channel),
            canInvite: PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel),
          };
        };
        const items1 = [channel];
        cResult[1] = channel;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp12 = items1;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[2];
        tmp12 = cResult[3];
      }
      const tmpResult6 = channel(remixProject[17]);
      const stateFromStoresObject = channel(remixProject[19]).useStateFromStoresObject(first, tmp11, tmp12);
      const canManageChannel = stateFromStoresObject.canManageChannel;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [canManageChannel];
        cResult[4] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== channel.id) {
        class N {
          constructor() {
            return closure_4.getMemberCount(channel.id).total;
          }
        }
        const items3 = [channel.id];
        cResult[5] = channel.id;
        cResult[6] = N;
        cResult[7] = items3;
        let tmp17 = items3;
      } else {
        class N {
          constructor() {
            return closure_4.getMemberCount(channel.id).total;
          }
        }
        tmp17 = cResult[7];
      }
      const tmpResult7 = channel(remixProject[19]);
      const stateFromStores = channel(remixProject[19]).useStateFromStores(tmp14, N, tmp17);
      if (cResult[8] === channel.id) {
        class N {
          constructor() {
            return closure_4.getMemberCount(channel.id).total;
          }
        }
        const effect = noop.useEffect(V, items5);
        const tmp22 = closure_15(appChannelAppActions.reload);
        const tmp23 = closure_15(appChannelAppActions.close);
        const tmp24 = closure_15(appChannelAppActions.appInfo);
        closure_15(appChannelAppActions.devicePermissions);
        closure_15(appChannelAppActions.report);
        if (cResult[12] === guild_id) {
          class N {
            constructor() {
              return closure_4.getMemberCount(channel.id).total;
            }
          }
          if (cResult[15] !== tmp7) {
            class U {
              constructor() {
                if (null != closure_3) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp5 = closure_1;
                  tmp6 = closure_1(closure_2[22])(tmp.id);
                }
                return;
              }
            }
            cResult[15] = tmp7;
            cResult[16] = U;
          } else {
            class U {
              constructor() {
                if (null != closure_3) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp5 = closure_1;
                  tmp6 = closure_1(closure_2[22])(tmp.id);
                }
                return;
              }
            }
          }
          if (cResult[17] === canManageChannel) {
            class U {
              constructor() {
                if (null != closure_3) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  tmp5 = closure_1;
                  tmp6 = closure_1(closure_2[22])(tmp.id);
                }
                return;
              }
            }
            if (cResult[20] !== channel.id) {
              class J {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[14]);
                  result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
                  return;
                }
              }
              cResult[20] = channel.id;
              cResult[21] = J;
            } else {
              class J {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[14]);
                  result1 = obj2.openConjureAppChannelMembersSheet(channel.id);
                  return;
                }
              }
            }
            if (cResult[22] !== channel) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
              cResult[22] = channel;
              cResult[23] = Y;
            } else {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (isConjureMobileEnabled) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (isConjureMobileEnabled) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (isConjureMobileEnabled1) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (isConjureMobileEnabled1) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (cResult[24] !== channel) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
              let obj2 = { channel };
              const tmp34 = closure_10(closure_14, obj2);
              cResult[24] = channel;
              cResult[25] = tmp34;
            } else {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            if (cResult[26] === tmp23) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
              if (cResult[29] === isConjureMobileEnabled) {
                class Y {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[24]);
                    obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                    result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                    return;
                  }
                }
                if (cResult[32] === isConjureMobileEnabled1) {
                  class Y {
                    constructor() {
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[24]);
                      obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                      result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                      return;
                    }
                  }
                  if (cResult[35] !== tmp24) {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                    if (null != tmp24) {
                      class Y {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          result = obj.closeConjureAppChannelSheet();
                          obj2 = closure_0(closure_2[24]);
                          obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                          result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                          return;
                        }
                      }
                      let obj3 = { onPress: tmp24, icon: null, label: null };
                      let obj4 = { IconComponent: tmp(tmp2[35]).CircleInformationIcon };
                      obj3.icon = closure_10(tmp(tmp2[27]).TableRowIcon, obj4);
                      const string5 = tmp(tmp2[29]).intl.string;
                      class X {
                        constructor() {
                          tmp2 = null != remixProject;
                          tmp = remixProject;
                          if (tmp2) {
                            tmp3 = c1;
                            tmp2 = null != c1;
                          }
                          if (tmp2) {
                            tmp4 = closure_0;
                            tmp5 = closure_2;
                            obj = closure_0(closure_2[14]);
                            result = obj.closeConjureAppChannelSheet();
                            obj2 = closure_0(closure_2[20]);
                            obj1 = { key: null, content: null };
                            obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                            tmp7 = jsx;
                            tmp8 = closure_1;
                            obj5 = { project: null, currentGuildId: null, onRemixed: null };
                            obj5.project = tmp;
                            tmp9 = c1;
                            obj5.currentGuildId = c1;
                            obj5.onRemixed = function onRemixed(arg0) {
                              return guild_id(remixProject[22])(arg0);
                            };
                            obj1.content = jsx(closure_1(closure_2[21]), obj5);
                            showActionSheetResult = obj2.showActionSheet(obj1);
                          }
                          return;
                        }
                      }
                      const tmp43 = closure_10(tmp(tmp2[26]).TableRow, obj3);
                    }
                    cResult[35] = tmp24;
                    cResult[36] = tmp43;
                  } else {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                  }
                  if (canManageChannel) {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                  } else {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                  }
                  if (cResult[37] !== tmp44) {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                    const obj5 = { IconComponent: tmp44 };
                    const tmp46 = closure_10(tmp(tmp2[27]).TableRowIcon, obj5);
                    cResult[37] = tmp44;
                    cResult[38] = tmp46;
                  } else {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                  }
                  if (cResult[39] !== canManageChannel) {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                    const t = tmp(tmp2[29]).t;
                    const stringResult = obj20.string(canManageChannel ? t.XPDhcc : t.h850Ss);
                    cResult[39] = canManageChannel;
                    cResult[40] = stringResult;
                  } else {
                    class Y {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[24]);
                        obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                        result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                        return;
                      }
                    }
                    const _Symbol = Symbol;
                    if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                      class Y {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          result = obj.closeConjureAppChannelSheet();
                          obj2 = closure_0(closure_2[24]);
                          obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                          result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                          return;
                        }
                      }
                      const tmp51 = closure_10(tmp(tmp2[34]).TableRowArrow, {});
                      cResult[41] = tmp51;
                    } else {
                      class Y {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          result = obj.closeConjureAppChannelSheet();
                          obj2 = closure_0(closure_2[24]);
                          obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                          result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                          return;
                        }
                      }
                    }
                    if (cResult[42] === tmp29) {
                      class Y {
                        constructor() {
                          obj = closure_0(closure_2[14]);
                          result = obj.closeConjureAppChannelSheet();
                          obj2 = closure_0(closure_2[24]);
                          obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                          result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                          return;
                        }
                      }
                    }
                    const obj6 = { onPress: tmp29, icon: tmp45, label: tmp47, trailing: null };
                    class X {
                      constructor() {
                        tmp2 = null != remixProject;
                        tmp = remixProject;
                        if (tmp2) {
                          tmp3 = c1;
                          tmp2 = null != c1;
                        }
                        if (tmp2) {
                          tmp4 = closure_0;
                          tmp5 = closure_2;
                          obj = closure_0(closure_2[14]);
                          result = obj.closeConjureAppChannelSheet();
                          obj2 = closure_0(closure_2[20]);
                          obj1 = { key: null, content: null };
                          obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                          tmp7 = jsx;
                          tmp8 = closure_1;
                          obj5 = { project: null, currentGuildId: null, onRemixed: null };
                          obj5.project = tmp;
                          tmp9 = c1;
                          obj5.currentGuildId = c1;
                          obj5.onRemixed = function onRemixed(arg0) {
                            return guild_id(remixProject[22])(arg0);
                          };
                          obj1.content = jsx(closure_1(closure_2[21]), obj5);
                          showActionSheetResult = obj2.showActionSheet(obj1);
                        }
                        return;
                      }
                    }
                    const tmp54 = closure_10(tmp(tmp2[26]).TableRow, obj6);
                    cResult[42] = tmp29;
                    cResult[43] = tmp45;
                    cResult[44] = tmp47;
                    cResult[45] = tmp54;
                  }
                }
                let tmp41 = null;
                if (isConjureMobileEnabled1) {
                  class Y {
                    constructor() {
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[24]);
                      obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                      result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                      return;
                    }
                  }
                  const obj7 = { onPress: U, icon: null, label: null, trailing: null };
                  const obj8 = { IconComponent: tmp(tmp2[33]).PencilIcon };
                  obj7.icon = closure_10(tmp(tmp2[27]).TableRowIcon, obj8);
                  const string4 = tmp(tmp2[29]).intl.string;
                  class X {
                    constructor() {
                      tmp2 = null != remixProject;
                      tmp = remixProject;
                      if (tmp2) {
                        tmp3 = c1;
                        tmp2 = null != c1;
                      }
                      if (tmp2) {
                        tmp4 = closure_0;
                        tmp5 = closure_2;
                        obj = closure_0(closure_2[14]);
                        result = obj.closeConjureAppChannelSheet();
                        obj2 = closure_0(closure_2[20]);
                        obj1 = { key: null, content: null };
                        obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                        tmp7 = jsx;
                        tmp8 = closure_1;
                        obj5 = { project: null, currentGuildId: null, onRemixed: null };
                        obj5.project = tmp;
                        tmp9 = c1;
                        obj5.currentGuildId = c1;
                        obj5.onRemixed = function onRemixed(arg0) {
                          return guild_id(remixProject[22])(arg0);
                        };
                        obj1.content = jsx(closure_1(closure_2[21]), obj5);
                        showActionSheetResult = obj2.showActionSheet(obj1);
                      }
                      return;
                    }
                  }
                  obj7.trailing = closure_10(tmp(tmp2[34]).TableRowArrow, {});
                  tmp41 = closure_10(tmp(tmp2[26]).TableRow, obj7);
                }
                cResult[32] = isConjureMobileEnabled1;
                cResult[33] = U;
                cResult[34] = tmp41;
                class X {
                  constructor() {
                    tmp2 = null != remixProject;
                    tmp = remixProject;
                    if (tmp2) {
                      tmp3 = c1;
                      tmp2 = null != c1;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[20]);
                      obj1 = { key: null, content: null };
                      obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                      tmp7 = jsx;
                      tmp8 = closure_1;
                      obj5 = { project: null, currentGuildId: null, onRemixed: null };
                      obj5.project = tmp;
                      tmp9 = c1;
                      obj5.currentGuildId = c1;
                      obj5.onRemixed = function onRemixed(arg0) {
                        return guild_id(remixProject[22])(arg0);
                      };
                      obj1.content = jsx(closure_1(closure_2[21]), obj5);
                      showActionSheetResult = obj2.showActionSheet(obj1);
                    }
                    return;
                  }
                }
              }
              let tmp40 = null;
              if (isConjureMobileEnabled) {
                class Y {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[24]);
                    obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                    result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                    return;
                  }
                }
                const obj9 = { onPress: X, icon: null, label: null };
                const obj10 = { IconComponent: tmp(tmp2[31]).RemixIcon };
                obj9.icon = closure_10(tmp(tmp2[27]).TableRowIcon, obj10);
                const string3 = tmp(tmp2[29]).intl.string;
                class X {
                  constructor() {
                    tmp2 = null != remixProject;
                    tmp = remixProject;
                    if (tmp2) {
                      tmp3 = c1;
                      tmp2 = null != c1;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[20]);
                      obj1 = { key: null, content: null };
                      obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                      tmp7 = jsx;
                      tmp8 = closure_1;
                      obj5 = { project: null, currentGuildId: null, onRemixed: null };
                      obj5.project = tmp;
                      tmp9 = c1;
                      obj5.currentGuildId = c1;
                      obj5.onRemixed = function onRemixed(arg0) {
                        return guild_id(remixProject[22])(arg0);
                      };
                      obj1.content = jsx(closure_1(closure_2[21]), obj5);
                      showActionSheetResult = obj2.showActionSheet(obj1);
                    }
                    return;
                  }
                }
                tmp40 = closure_10(tmp(tmp2[26]).TableRow, obj9);
              }
              cResult[29] = isConjureMobileEnabled;
              cResult[30] = X;
              cResult[31] = tmp40;
              class X {
                constructor() {
                  tmp2 = null != remixProject;
                  tmp = remixProject;
                  if (tmp2) {
                    tmp3 = c1;
                    tmp2 = null != c1;
                  }
                  if (tmp2) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[20]);
                    obj1 = { key: null, content: null };
                    obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                    tmp7 = jsx;
                    tmp8 = closure_1;
                    obj5 = { project: null, currentGuildId: null, onRemixed: null };
                    obj5.project = tmp;
                    tmp9 = c1;
                    obj5.currentGuildId = c1;
                    obj5.onRemixed = function onRemixed(arg0) {
                      return guild_id(remixProject[22])(arg0);
                    };
                    obj1.content = jsx(closure_1(closure_2[21]), obj5);
                    showActionSheetResult = obj2.showActionSheet(obj1);
                  }
                  return;
                }
              }
            }
            if (null != tmp22) {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
              let tmp38 = null;
              if (null != tmp22) {
                class Y {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[24]);
                    obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                    result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                    return;
                  }
                }
                const obj11 = { onPress: tmp22, icon: null, label: null };
                const obj12 = { IconComponent: tmp(tmp2[28]).RefreshIcon };
                obj11.icon = closure_10(tmp(tmp2[27]).TableRowIcon, obj12);
                const string = tmp(tmp2[29]).intl.string;
                class X {
                  constructor() {
                    tmp2 = null != remixProject;
                    tmp = remixProject;
                    if (tmp2) {
                      tmp3 = c1;
                      tmp2 = null != c1;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[20]);
                      obj1 = { key: null, content: null };
                      obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                      tmp7 = jsx;
                      tmp8 = closure_1;
                      obj5 = { project: null, currentGuildId: null, onRemixed: null };
                      obj5.project = tmp;
                      tmp9 = c1;
                      obj5.currentGuildId = c1;
                      obj5.onRemixed = function onRemixed(arg0) {
                        return guild_id(remixProject[22])(arg0);
                      };
                      obj1.content = jsx(closure_1(closure_2[21]), obj5);
                      showActionSheetResult = obj2.showActionSheet(obj1);
                    }
                    return;
                  }
                }
                tmp38 = closure_10(tmp(tmp2[26]).TableRow, obj11);
              }
              const items4 = [tmp38];
              let tmp39 = null;
              if (null != tmp23) {
                class Y {
                  constructor() {
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[24]);
                    obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                    result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                    return;
                  }
                }
                const obj13 = { onPress: tmp23, icon: null, label: null };
                const obj14 = { IconComponent: tmp(tmp2[30]).DoorExitIcon };
                obj13.icon = closure_10(tmp(tmp2[27]).TableRowIcon, obj14);
                const string2 = tmp(tmp2[29]).intl.string;
                class X {
                  constructor() {
                    tmp2 = null != remixProject;
                    tmp = remixProject;
                    if (tmp2) {
                      tmp3 = c1;
                      tmp2 = null != c1;
                    }
                    if (tmp2) {
                      tmp4 = closure_0;
                      tmp5 = closure_2;
                      obj = closure_0(closure_2[14]);
                      result = obj.closeConjureAppChannelSheet();
                      obj2 = closure_0(closure_2[20]);
                      obj1 = { key: null, content: null };
                      obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                      tmp7 = jsx;
                      tmp8 = closure_1;
                      obj5 = { project: null, currentGuildId: null, onRemixed: null };
                      obj5.project = tmp;
                      tmp9 = c1;
                      obj5.currentGuildId = c1;
                      obj5.onRemixed = function onRemixed(arg0) {
                        return guild_id(remixProject[22])(arg0);
                      };
                      obj1.content = jsx(closure_1(closure_2[21]), obj5);
                      showActionSheetResult = obj2.showActionSheet(obj1);
                    }
                    return;
                  }
                }
                tmp39 = closure_10(tmp(tmp2[26]).TableRow, obj13);
              }
              items4[1] = tmp39;
              class X {
                constructor() {
                  tmp2 = null != remixProject;
                  tmp = remixProject;
                  if (tmp2) {
                    tmp3 = c1;
                    tmp2 = null != c1;
                  }
                  if (tmp2) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[14]);
                    result = obj.closeConjureAppChannelSheet();
                    obj2 = closure_0(closure_2[20]);
                    obj1 = { key: null, content: null };
                    obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                    tmp7 = jsx;
                    tmp8 = closure_1;
                    obj5 = { project: null, currentGuildId: null, onRemixed: null };
                    obj5.project = tmp;
                    tmp9 = c1;
                    obj5.currentGuildId = c1;
                    obj5.onRemixed = function onRemixed(arg0) {
                      return guild_id(remixProject[22])(arg0);
                    };
                    obj1.content = jsx(closure_1(closure_2[21]), obj5);
                    showActionSheetResult = obj2.showActionSheet(obj1);
                  }
                  return;
                }
              }
              const tmp37Result = tmp37(tmp(tmp2[25]).TableRowGroup, { hasIcons: true, children: null });
              const obj15 = { hasIcons: true, children: null };
            } else {
              class Y {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[24]);
                  obj1 = { source: InstantInviteSources.CONTEXT_MENU };
                  result1 = obj2.showInstantInviteActionSheet(channel, obj1);
                  return;
                }
              }
            }
            class X {
              constructor() {
                tmp2 = null != remixProject;
                tmp = remixProject;
                if (tmp2) {
                  tmp3 = c1;
                  tmp2 = null != c1;
                }
                if (tmp2) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[14]);
                  result = obj.closeConjureAppChannelSheet();
                  obj2 = closure_0(closure_2[20]);
                  obj1 = { key: null, content: null };
                  obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                  tmp7 = jsx;
                  tmp8 = closure_1;
                  obj5 = { project: null, currentGuildId: null, onRemixed: null };
                  obj5.project = tmp;
                  tmp9 = c1;
                  obj5.currentGuildId = c1;
                  obj5.onRemixed = function onRemixed(arg0) {
                    return guild_id(remixProject[22])(arg0);
                  };
                  obj1.content = jsx(closure_1(closure_2[21]), obj5);
                  showActionSheetResult = obj2.showActionSheet(obj1);
                }
                return;
              }
            }
            cResult[26] = tmp23;
            cResult[27] = tmp22;
            cResult[28] = tmp37Result;
          }
          const fn2 = function z() {
            const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
            ChannelSettingsActionCreatorsDefault.setSection(canManageChannel ? React5.OVERVIEW : React5.NOTIFICATIONS);
            ChannelSettingsActionCreatorsDefault.open(channel.id);
            const tmp3Result = ChannelSettingsActionCreatorsDefault;
          };
          cResult[17] = canManageChannel;
          cResult[18] = channel.id;
          cResult[19] = fn2;
          class X {
            constructor() {
              tmp2 = null != remixProject;
              tmp = remixProject;
              if (tmp2) {
                tmp3 = c1;
                tmp2 = null != c1;
              }
              if (tmp2) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[14]);
                result = obj.closeConjureAppChannelSheet();
                obj2 = closure_0(closure_2[20]);
                obj1 = { key: null, content: null };
                obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
                tmp7 = jsx;
                tmp8 = closure_1;
                obj5 = { project: null, currentGuildId: null, onRemixed: null };
                obj5.project = tmp;
                tmp9 = c1;
                obj5.currentGuildId = c1;
                obj5.onRemixed = function onRemixed(arg0) {
                  return guild_id(remixProject[22])(arg0);
                };
                obj1.content = jsx(closure_1(closure_2[21]), obj5);
                showActionSheetResult = obj2.showActionSheet(obj1);
              }
              return;
            }
          }
        }
        class X {
          constructor() {
            tmp2 = null != remixProject;
            tmp = remixProject;
            if (tmp2) {
              tmp3 = c1;
              tmp2 = null != c1;
            }
            if (tmp2) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[14]);
              result = obj.closeConjureAppChannelSheet();
              obj2 = closure_0(closure_2[20]);
              obj1 = { key: null, content: null };
              obj1.key = closure_0(closure_2[21]).CONJURE_REMIX_SHEET_KEY;
              tmp7 = jsx;
              tmp8 = closure_1;
              obj5 = { project: null, currentGuildId: null, onRemixed: null };
              obj5.project = tmp;
              tmp9 = c1;
              obj5.currentGuildId = c1;
              obj5.onRemixed = function onRemixed(arg0) {
                return guild_id(remixProject[22])(arg0);
              };
              obj1.content = jsx(closure_1(closure_2[21]), obj5);
              showActionSheetResult = obj2.showActionSheet(obj1);
            }
            return;
          }
        }
        cResult[12] = guild_id;
        cResult[13] = remixProject;
        cResult[14] = X;
      }
      class V {
        constructor() {
          if (null != c1) {
            tmp2 = closure_4;
            tmp3 = channel;
            count = closure_4.requestCount(tmp, channel.id);
          }
          return;
        }
      }
      items5 = [guild_id, channel.id];
      cResult[8] = channel.id;
      cResult[9] = guild_id;
      cResult[10] = V;
      cResult[11] = items5;
      const tmpResult8 = channel(remixProject[19]);
    }
  : function ConjureAppChannelSheetContent(channel) {
      channel = channel.channel;
      let remixProject;
      noop = undefined;
      let canManageChannel;
      let guild_id = channel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      let tmp2 = channel;
      const tmp3 = remixProject;
      const appChannelAppActions = channel(remixProject[15]).useAppChannelAppActions(channel);
      remixProject = guild_id(remixProject[16])(channel, true).remixProject;
      let obj = channel(remixProject[15]);
      const isConjureMobileEnabled = channel(remixProject[17]).useIsConjureMobileEnabled(
        null != remixProject,
        "ConjureAppChannelSheet",
      );
      const tmp7 = guild_id(remixProject[18])(channel);
      noop = tmp7;
      let obj2 = channel(remixProject[17]);
      const isConjureMobileEnabled1 = channel(remixProject[17]).useIsConjureMobileEnabled(
        null != tmp7,
        "ConjureAppChannelSheet",
      );
      let obj3 = channel(remixProject[17]);
      const items = [PermissionStore];
      const items1 = [channel];
      const stateFromStoresObject = channel(remixProject[19]).useStateFromStoresObject(
        items,
        () => ({
          canManageChannel: PermissionStore.can(constants2.MANAGE_CHANNELS, channel),
          canInvite: PermissionStore.can(constants2.CREATE_INSTANT_INVITE, channel),
        }),
        items1,
      );
      canManageChannel = stateFromStoresObject.canManageChannel;
      let obj4 = channel(remixProject[19]);
      const items2 = [canManageChannel];
      const items3 = [channel.id];
      const stateFromStores = channel(remixProject[19]).useStateFromStores(
        items2,
        () => ChannelMemberCountStore.getMemberCount(channel.id).total,
        items3,
      );
      const items4 = [guild_id, channel.id];
      const effect = noop.useEffect(() => {
        if (null != guild_id) {
          const count = ChannelMemberCountStore.requestCount(tmp, channel.id);
        }
      }, items4);
      const tmp12 = closure_15(appChannelAppActions.reload);
      const tmp13 = closure_15(appChannelAppActions.close);
      const tmp14 = closure_15(appChannelAppActions.appInfo);
      const tmp15 = closure_15(appChannelAppActions.devicePermissions);
      const tmp16 = closure_15(appChannelAppActions.report);
      const items5 = [guild_id, remixProject];
      const items6 = [tmp7];
      const callback = noop.useCallback(() => {
        let tmp2 = null != remixProject;
        if (tmp2) {
          tmp2 = null != guild_id;
        }
        if (tmp2) {
          const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
          const obj3 = { key: ConjureRemixSheet.CONJURE_REMIX_SHEET_KEY, content: null };
          const obj4 = {
            project: remixProject,
            currentGuildId: guild_id,
            onRemixed(arg0) {
              return guild_id(remixProject[22])(arg0);
            },
          };
          obj3.content = v65535(ConjureRemixSheetDefault, obj4);
          ActionSheetActionCreators.showActionSheet(obj3);
        }
      }, items5);
      const items7 = [canManageChannel, channel.id];
      const callback1 = noop.useCallback(() => {
        if (null != closure_3) {
          const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
          openConjureHomeScreenDefault(tmp.id);
        }
      }, items6);
      const items8 = [channel.id];
      const callback2 = noop.useCallback(() => {
        const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
        ChannelSettingsActionCreatorsDefault.setSection(canManageChannel ? React5.OVERVIEW : React5.NOTIFICATIONS);
        ChannelSettingsActionCreatorsDefault.open(channel.id);
        const tmp3Result = ChannelSettingsActionCreatorsDefault;
      }, items7);
      const items9 = [channel];
      const callback3 = noop.useCallback(() => {
        const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
        const result1 = openConjureAppChannelSheet.openConjureAppChannelMembersSheet(channel.id);
      }, items8);
      const callback4 = noop.useCallback(() => {
        const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
        const result1 = instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, {
          source: constants.CONTEXT_MENU,
        });
      }, items9);
      const children = [closure_10(closure_14, { channel }), , , ,];
      if (null != tmp12) {
        let tmp24Result = null;
        if (null != tmp12) {
          const obj6 = { onPress: tmp12, icon: null, label: null };
          const obj7 = { IconComponent: tmp2(tmp3[28]).RefreshIcon };
          obj6.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj7);
          const intl = tmp2(tmp3[29]).intl;
          obj6.label = intl.string(tmp2(tmp3[29]).t.kHie4V);
          tmp24Result = closure_10(tmp2(tmp3[26]).TableRow, obj6);
        }
        const items11 = [tmp24Result];
        let tmp24Result8 = null;
        if (null != tmp13) {
          const obj8 = { onPress: tmp13, icon: null, label: null };
          const obj9 = { IconComponent: tmp2(tmp3[30]).DoorExitIcon };
          obj8.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj9);
          const intl2 = tmp2(tmp3[29]).intl;
          obj8.label = intl2.string(tmp2(tmp3[29]).t.VkMnR2);
          tmp24Result8 = closure_10(tmp2(tmp3[26]).TableRow, obj8);
        }
        const obj10 = { hasIcons: true, children: null };
        items11[1] = tmp24Result8;
        obj10.children = items11;
        let tmp22Result = closure_11(tmp2(tmp3[25]).TableRowGroup, obj10);
      } else {
        tmp22Result = null;
      }
      children[1] = tmp22Result;
      let tmp24Result9 = null;
      if (isConjureMobileEnabled) {
        tmp24Result9 = null;
        if (null != remixProject) {
          tmp24Result9 = null;
          if (null != guild_id) {
            const obj11 = { onPress: callback, icon: null, label: null };
            const obj12 = { IconComponent: tmp2(tmp3[31]).RemixIcon };
            obj11.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj12);
            const intl3 = tmp2(tmp3[29]).intl;
            obj11.label = intl3.string(tmp5(tmp3[32]).KMwCb7);
            tmp24Result9 = closure_10(tmp2(tmp3[26]).TableRow, obj11);
          }
        }
      }
      const items12 = [tmp24Result9, , , ,];
      let tmp24Result10 = null;
      if (isConjureMobileEnabled1) {
        tmp24Result10 = null;
        if (null != tmp7) {
          tmp24Result10 = null;
          if (null != guild_id) {
            const obj13 = { onPress: callback1, icon: null, label: null, trailing: null };
            const obj14 = { IconComponent: tmp2(tmp3[33]).PencilIcon };
            obj13.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj14);
            const intl4 = tmp2(tmp3[29]).intl;
            obj13.label = intl4.string(tmp5(tmp3[32]).jMMrDM);
            obj13.trailing = closure_10(tmp2(tmp3[34]).TableRowArrow, {});
            tmp24Result10 = closure_10(tmp2(tmp3[26]).TableRow, obj13);
          }
        }
      }
      items12[1] = tmp24Result10;
      let tmp24Result11 = null;
      if (null != tmp14) {
        const obj15 = { onPress: tmp14, icon: null, label: null };
        const obj16 = { IconComponent: tmp2(tmp3[35]).CircleInformationIcon };
        obj15.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj16);
        const intl5 = tmp2(tmp3[29]).intl;
        obj15.label = intl5.string(tmp2(tmp3[29]).t.Sh2z9g);
        tmp24Result11 = closure_10(tmp2(tmp3[26]).TableRow, obj15);
      }
      items12[2] = tmp24Result11;
      const obj17 = { onPress: callback2, icon: null, label: null, trailing: null };
      if (canManageChannel) {
        let ChannelNotificationIcon = tmp2(tmp3[36]).SettingsIcon;
      } else {
        ChannelNotificationIcon = tmp2(tmp3[37]).ChannelNotificationIcon;
      }
      obj17.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, { IconComponent: ChannelNotificationIcon });
      const intl6 = tmp2(tmp3[29]).intl;
      const t = tmp2(tmp3[29]).t;
      obj17.label = intl6.string(canManageChannel ? t.XPDhcc : t.h850Ss);
      obj17.trailing = closure_10(tmp2(tmp3[34]).TableRowArrow, {});
      items12[3] = closure_10(tmp2(tmp3[26]).TableRow, obj17);
      let tmp24Result12 = null;
      if (null != tmp15) {
        const obj18 = { onPress: tmp15, icon: null, label: null, trailing: null };
        const obj19 = { IconComponent: tmp2(tmp3[38]).ShieldIcon };
        obj18.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj19);
        const intl7 = tmp2(tmp3[29]).intl;
        obj18.label = intl7.string(tmp5(tmp3[32]).wum6n2);
        obj18.trailing = closure_10(tmp2(tmp3[34]).TableRowArrow, {});
        tmp24Result12 = closure_10(tmp2(tmp3[26]).TableRow, obj18);
      }
      items12[4] = tmp24Result12;
      children[2] = closure_11(tmp2(tmp3[25]).TableRowGroup, { hasIcons: true, children: items12 });
      const obj20 = { onPress: callback3, icon: null, label: null, trailing: null };
      const obj5 = channel(remixProject[19]);
      obj20.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, { IconComponent: tmp2(tmp3[39]).GroupIcon });
      if (null != stateFromStores) {
        const intl9 = tmp2(tmp3[29]).intl;
        const obj22 = { count: stateFromStores };
        let formatToPlainStringResult = intl9.formatToPlainString(tmp2(tmp3[29]).t.AWmdd9, obj22);
      } else {
        const intl8 = tmp2(tmp3[29]).intl;
        formatToPlainStringResult = intl8.string(tmp2(tmp3[29]).t.x87QCk);
      }
      obj20.label = formatToPlainStringResult;
      obj20.trailing = closure_10(tmp2(tmp3[34]).TableRowArrow, {});
      const items13 = [closure_10(tmp2(tmp3[26]).TableRow, obj20)];
      let tmp24Result13 = null;
      if (stateFromStoresObject.canInvite) {
        const obj23 = { onPress: callback4, icon: null, label: null, trailing: null };
        const obj24 = { IconComponent: tmp2(tmp3[40]).GroupPlusIcon };
        obj23.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj24);
        const intl10 = tmp2(tmp3[29]).intl;
        obj23.label = intl10.string(tmp2(tmp3[29]).t["f1+QIK"]);
        obj23.trailing = closure_10(tmp2(tmp3[34]).TableRowArrow, {});
        tmp24Result13 = closure_10(tmp2(tmp3[26]).TableRow, obj23);
      }
      items13[1] = tmp24Result13;
      children[3] = closure_11(tmp2(tmp3[25]).TableRowGroup, { hasIcons: true, children: items13 });
      let tmp24Result14 = null;
      if (null != tmp16) {
        const obj25 = { hasIcons: true, children: null };
        const obj26 = { onPress: tmp16, variant: "danger", icon: null, label: null };
        const obj27 = { IconComponent: tmp2(tmp3[41]).FlagIcon, variant: "danger" };
        obj26.icon = closure_10(tmp2(tmp3[27]).TableRowIcon, obj27);
        const intl11 = tmp2(tmp3[29]).intl;
        obj26.label = intl11.string(tmp2(tmp3[29]).t.NgA5vp);
        obj25.children = closure_10(tmp2(tmp3[26]).TableRow, obj26);
        tmp24Result14 = closure_10(tmp2(tmp3[25]).TableRowGroup, obj25);
      }
      children[4] = tmp24Result14;
      return closure_11(closure_12, { children });
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelSheet.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ConjureAppChannelSheet(channelId) {
        let SafeAreaPaddingView = channelId;
        let tmp = dependencyMap;
        const cResult = channelId(576).c(12);
        channelId = channelId.channelId;
        let content = closure_13();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          let tmp6 = items1;
          let tmp5 = fn;
        } else {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        let obj = channelId(576);
        const stateFromStores = SafeAreaPaddingView(504).useStateFromStores(first, tmp5, tmp6);
        if (cResult[4] !== stateFromStores) {
          const fn2 = function b() {
            if (null == stateFromStores) {
              const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
            }
          };
          const items2 = [stateFromStores];
          cResult[4] = stateFromStores;
          cResult[5] = fn2;
          cResult[6] = items2;
          let tmp9 = items2;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        if (null == stateFromStores) {
          return null;
        } else {
          if (cResult[7] !== stateFromStores) {
            const obj2 = { spacing: stateFromStores(587).space.PX_24, children: null };
            const obj3 = { channel: stateFromStores };
            obj2.children = closure_10(closure_16, obj3);
            const tmp15 = closure_10(SafeAreaPaddingView(6015).Stack, obj2);
            cResult[7] = stateFromStores;
            cResult[8] = tmp15;
            let tmp11 = tmp15;
          } else {
            tmp11 = cResult[8];
          }
          if (cResult[9] === content.content) {
          }
          const obj4 = { startExpanded: true, scrollable: true, children: null };
          const obj5 = { children: null };
          SafeAreaPaddingView = SafeAreaPaddingView(7281).SafeAreaPaddingView;
          const obj6 = { bottom: true, style: content.content, children: tmp11 };
          tmp = closure_10(SafeAreaPaddingView, obj6);
          obj5.children = tmp;
          obj4.children = closure_10(SafeAreaPaddingView(5306).BottomSheetScrollView, obj5);
          const tmp18 = closure_10(SafeAreaPaddingView(5302).BottomSheet, obj4);
          content = content.content;
          cResult[9] = content;
          cResult[10] = tmp11;
          cResult[11] = tmp18;
        }
        const SafeAreaPaddingViewResult = SafeAreaPaddingView(504);
      }
    : function ConjureAppChannelSheet(channelId) {
        channelId = channelId.channelId;
        const tmp = closure_13();
        const items = [ChannelStore];
        const items1 = [channelId];
        const stateFromStores = channelId(504).useStateFromStores(
          items,
          () => ChannelStore.getChannel(channelId),
          items1,
        );
        const items2 = [stateFromStores];
        const effect = noop.useEffect(() => {
          if (null == stateFromStores) {
            const result = openConjureAppChannelSheet.closeConjureAppChannelSheet();
          }
        }, items2);
        let tmp6 = null;
        if (null != stateFromStores) {
          const obj2 = { startExpanded: true, scrollable: true, children: null };
          const obj3 = { children: null };
          const obj4 = { bottom: true, style: tmp.content, children: null };
          const obj5 = { spacing: stateFromStores(587).space.PX_24, children: null };
          const obj6 = { channel: stateFromStores };
          obj5.children = closure_10(closure_16, obj6);
          obj4.children = closure_10(tmp2(6015).Stack, obj5);
          obj3.children = closure_10(tmp2(7281).SafeAreaPaddingView, obj4);
          obj2.children = closure_10(tmp2(5306).BottomSheetScrollView, obj3);
          tmp6 = closure_10(tmp2(5302).BottomSheet, obj2);
        }
        return tmp6;
      },
);
