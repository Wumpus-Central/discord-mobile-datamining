// === Module 11311: GameOrganizationInvitePickerActionSheet ===

// Module 11311 (GameOrganizationInvitePickerActionSheet)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5234 */;
import FastImageDefault from "FastImage" /* 5669 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import TableRowGroup from "TableRowGroup" /* 6987 */;
import _modDef7265 from "module_7265" /* 7265 */;
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow" /* 11312 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11313 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 11319 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11320 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11323 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const days = fn(11026).GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_8 }, centeredText: { textAlign: "center" }, gameIcon: null, sections: null, status: null };
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj2.gameIcon = size;
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.sections = { paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.status = { paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameSection(onInvite) {
  const cResult = userId(576).c(22);
  ({ group, userId } = onInvite);
  onInvite = onInvite.onInvite;
  const tmp4 = closure_9();
  const application = group.application;
  if (cResult[0] !== application.iconUrl) {
    if (null != application.iconUrl) {
      const obj2 = { uri: application.iconUrl };
      let tmp8 = obj2;
    } else {
      tmp8 = onInvite(7265);
    }
    cResult[0] = application.iconUrl;
    cResult[1] = tmp8;
  } else {
    if (cResult[2] === tmp4.gameIcon) {
      if (cResult[3] === tmp5) {
        let tmp10 = cResult[4];
      }
      if (cResult[5] !== application.name) {
        const obj3 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name };
        const tmp16 = closure_7(userId(5234).Text, obj3);
        cResult[5] = application.name;
        cResult[6] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp10) {
        if (cResult[8] === tmp14) {
          let tmp17 = cResult[9];
        }
        if (cResult[10] === group.gameOrganizations) {
          if (cResult[11] === onInvite) {
            if (cResult[12] === userId) {
              if (cResult[17] !== cResult[13]) {
                const obj4 = { hasIcons: true, children: tmp21 };
                const tmp27 = closure_7(userId(6987).TableRowGroup, obj4);
                cResult[17] = tmp21;
                cResult[18] = tmp27;
                let tmp25 = tmp27;
              } else {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp17) {
                if (cResult[20] === tmp25) {
                  let tmp28 = cResult[21];
                }
                return tmp28;
              }
              const obj5 = { spacing: onInvite(587).space.PX_8, children: null };
              const items = [tmp17, tmp25];
              obj5.children = items;
              const tmp31 = closure_8(userId(5977).Stack, obj5);
              cResult[19] = tmp17;
              cResult[20] = tmp25;
              cResult[21] = tmp31;
              tmp28 = tmp31;
            }
          }
        }
        if (cResult[14] === onInvite) {
          if (cResult[15] === userId) {
            let tmp22 = cResult[16];
          }
          const gameOrganizations = group.gameOrganizations;
          const mapped = gameOrganizations.map(tmp22);
          group = group.gameOrganizations;
          cResult[10] = group;
          cResult[11] = onInvite;
          cResult[12] = userId;
          cResult[13] = mapped;
        }
        const fn = function x(organization) {
          organization = organization.organization;
          return React5(GameOrganizationInvitePickerRowDefault, { organization, userId, onInvite }, organization.id);
        };
        cResult[14] = onInvite;
        cResult[15] = userId;
        cResult[16] = fn;
        tmp22 = fn;
      }
      const obj6 = { direction: "horizontal", spacing: onInvite(587).space.PX_4, align: "center", children: null };
      const items1 = [tmp10, tmp14];
      obj6.children = items1;
      const tmp20 = closure_8(userId(5977).Stack, obj6);
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      cResult[9] = tmp20;
      tmp17 = tmp20;
    }
    const obj7 = { source: cResult[1], style: tmp4.gameIcon };
    const tmp13 = closure_7(onInvite(5669), obj7);
    cResult[2] = tmp4.gameIcon;
    cResult[3] = cResult[1];
    cResult[4] = tmp13;
    tmp10 = tmp13;
  }
  const obj = userId(576);
}) : (function GameSection(arg0) {
  ({ group, userId: require, onInvite: importDefault } = arg0);
  const application = group.application;
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
  const tmp = closure_9();
  if (null != application.iconUrl) {
    const obj3 = { uri: application.iconUrl };
    let tmp5Result = obj3;
  } else {
    tmp5Result = _modDef7265;
  }
  const items = [closure_7(FastImageDefault, { source: tmp5Result, style: tmp.gameIcon }), closure_7(Text_Text.Text, { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name })];
  obj2.children = items;
  const items1 = [closure_8(Stack_Stack.Stack, obj2), ];
  const obj6 = { hasIcons: true, children: null };
  const gameOrganizations = group.gameOrganizations;
  obj6.children = gameOrganizations.map((organization) => {
    organization = organization.organization;
    return React5(GameOrganizationInvitePickerRowDefault, { organization, userId, onInvite }, organization.id);
  });
  items1[1] = closure_7(TableRowGroup.TableRowGroup, obj6);
  obj.children = items1;
  return closure_8(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { paddingVertical: nativeDefault.space.PX_24 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInvitePickerActionSheet(userId) {
  const cResult = userId(576).c(43);
  userId = userId.userId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function x() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7);
  const tmpResult = userId(504);
  ({ data, error: status } = stateFromStores(11314)("game_organization_invite_picker"));
  if (cResult[3] !== data) {
    let tmp11 = null;
    if (null != data) {
      tmp11 = tmp9(11319)(data);
    }
    cResult[3] = data;
    cResult[4] = tmp11;
    let arr2 = tmp11;
  } else {
    arr2 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class P {
      constructor(arg0) {
        tmp = closure_1;
        if (null != closure_1) {
          tmp2 = userId;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          result = obj.toLinkedGameOrganization(userId);
          tmp6 = closure_1;
          tmp7 = closure_1(closure_2[19]);
          tmp8 = closure_1(closure_2[18])(result);
          tmp9 = tmp8;
          tmp10 = result;
          tmp11 = tmp;
          tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
        }
        return;
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = P;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_1;
        if (null != closure_1) {
          tmp2 = userId;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          result = obj.toLinkedGameOrganization(userId);
          tmp6 = closure_1;
          tmp7 = closure_1(closure_2[19]);
          tmp8 = closure_1(closure_2[18])(result);
          tmp9 = tmp8;
          tmp10 = result;
          tmp11 = tmp;
          tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
        }
        return;
      }
    }
  }
  dependencyMap = P;
  if (null == arr2) {
    class P {
      constructor(arg0) {
        tmp = closure_1;
        if (null != closure_1) {
          tmp2 = userId;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          result = obj.toLinkedGameOrganization(userId);
          tmp6 = closure_1;
          tmp7 = closure_1(closure_2[19]);
          tmp8 = closure_1(closure_2[18])(result);
          tmp9 = tmp8;
          tmp10 = result;
          tmp11 = tmp;
          tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
        }
        return;
      }
    }
    if (null != status) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      const items1 = [, ];
      ({ centeredText: arr4[0], status: arr4[1] } = tmp4);
      obj2.style = items1;
      const intl = tmp(1128).intl;
      obj2.children = intl.string(tmp(1128).t.fEptJP);
      let tmp18 = closure_7(tmp(5234).Text, obj2);
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const obj3 = { style: tmp4.status };
      tmp18 = closure_7(ActivityIndicator, obj3);
    }
    cResult[7] = status;
    ({ centeredText: tmp3[8], status } = tmp4);
    cResult[9] = status;
    cResult[10] = tmp18;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_1;
        if (null != closure_1) {
          tmp2 = userId;
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj = closure_0(closure_2[18]);
          result = obj.toLinkedGameOrganization(userId);
          tmp6 = closure_1;
          tmp7 = closure_1(closure_2[19]);
          tmp8 = closure_1(closure_2[18])(result);
          tmp9 = tmp8;
          tmp10 = result;
          tmp11 = tmp;
          tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
        }
        return;
      }
    }
    if (0 === arr2.length) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const items2 = [, ];
      ({ centeredText: arr3[0], status: arr3[1] } = tmp4);
      cResult[11] = tmp4.centeredText;
      cResult[12] = tmp4.status;
      cResult[13] = items2;
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      if (cResult[21] === P) {
        class P {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = userId;
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[18]);
              result = obj.toLinkedGameOrganization(userId);
              tmp6 = closure_1;
              tmp7 = closure_1(closure_2[19]);
              tmp8 = closure_1(closure_2[18])(result);
              tmp9 = tmp8;
              tmp10 = result;
              tmp11 = tmp;
              tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
            }
            return;
          }
        }
        const mapped = arr2.map(H);
        class H {
          constructor(arg0) {
            obj = { group: userId, userId, onInvite: closure_2 };
            return jsx(GameSection, obj, userId.application.id);
          }
        }
        cResult[17] = arr2;
        cResult[18] = P;
        cResult[19] = userId;
        cResult[20] = mapped;
      }
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      cResult[21] = P;
      cResult[22] = userId;
      cResult[23] = H;
    }
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const string = tmp21.string;
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      cResult[27] = tmp22;
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
    }
    const _Symbol = Symbol;
    ({ header, centeredText } = tmp4);
    if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const string2 = tmp24.string;
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      cResult[28] = tmp25;
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
    }
    if (cResult[29] !== tmp4.centeredText) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      obj4.children = tmp25;
      const tmp27 = closure_7(tmp(5234).Heading, obj4);
      cResult[29] = tmp4.centeredText;
      cResult[30] = tmp27;
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
    }
    if (cResult[31] !== stateFromStores) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      const name = tmp9(5025).getName(stateFromStores);
      if (name == null) {
        class P {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = userId;
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[18]);
              result = obj.toLinkedGameOrganization(userId);
              tmp6 = closure_1;
              tmp7 = closure_1(closure_2[19]);
              tmp8 = closure_1(closure_2[18])(result);
              tmp9 = tmp8;
              tmp10 = result;
              tmp11 = tmp;
              tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
            }
            return;
          }
        }
      }
      const obj5 = { username: name, days };
      const formatToPlainStringResult = obj6.formatToPlainString(tmp29, obj5);
      cResult[31] = stateFromStores;
      cResult[32] = formatToPlainStringResult;
      const tmp9Result = tmp9(5025);
    } else {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
    }
    if (cResult[33] === tmp4.centeredText) {
      class P {
        constructor(arg0) {
          tmp = closure_1;
          if (null != closure_1) {
            tmp2 = userId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj = closure_0(closure_2[18]);
            result = obj.toLinkedGameOrganization(userId);
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[19]);
            tmp8 = closure_1(closure_2[18])(result);
            tmp9 = tmp8;
            tmp10 = result;
            tmp11 = tmp;
            tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
          }
          return;
        }
      }
      if (cResult[36] === tmp4.header) {
        class P {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = userId;
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[18]);
              result = obj.toLinkedGameOrganization(userId);
              tmp6 = closure_1;
              tmp7 = closure_1(closure_2[19]);
              tmp8 = closure_1(closure_2[18])(result);
              tmp9 = tmp8;
              tmp10 = result;
              tmp11 = tmp;
              tmp7Result = tmp7(tmp8, result, tmp, closure_1(closure_2[20]));
            }
            return;
          }
        }
      }
      class H {
        constructor(arg0) {
          obj = { group: userId, userId, onInvite: closure_2 };
          return jsx(GameSection, obj, userId.application.id);
        }
      }
      const obj7 = { spacing: tmp9(587).space.PX_4, style: header, children: null };
      const items3 = [tmp26, tmp33];
      obj7.children = items3;
      const tmp37 = closure_8(tmp(5977).Stack, obj7);
      cResult[36] = tmp4.header;
      cResult[37] = tmp33;
      cResult[38] = tmp26;
      cResult[39] = tmp37;
    }
    const obj8 = { variant: "text-sm/medium", color: "text-muted", style: tmp4.centeredText, children: tmp28 };
    const tmp35 = closure_7(tmp(5234).Text, obj8);
    cResult[33] = tmp4.centeredText;
    cResult[34] = tmp28;
    cResult[35] = tmp35;
  }
  const tmp10 = stateFromStores(11314)("game_organization_invite_picker");
}) : (function GameOrganizationInvitePickerActionSheet(userId) {
  userId = userId.userId;
  let data;
  noop = undefined;
  const tmp = closure_9();
  const items = [UserStore];
  const stateFromStores = userId(data[15]).useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp6 = stateFromStores(data[16])("game_organization_invite_picker");
  data = tmp6.data;
  const items1 = [data];
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores];
  noop = noop.useCallback((organization) => {
    if (null != stateFromStores) {
      const result = getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization);
      const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
      sendGameOrganizationInviteDefault(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
    }
  }, items2);
  if (null == memo) {
    if (null != tmp6.error) {
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      const items3 = [, ];
      ({ centeredText: arr6[0], status: arr6[1] } = tmp);
      obj2.style = items3;
      const intl2 = tmp2(tmp3[21]).intl;
      obj2.children = intl2.string(tmp2(tmp3[21]).t.fEptJP);
      let tmp12 = closure_7(tmp2(tmp3[11]).Text, obj2);
    } else {
      const obj3 = { style: tmp.status };
      tmp12 = closure_7(ActivityIndicator, obj3);
    }
  } else {
    if (0 === memo.length) {
      const obj4 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      const items4 = [, ];
      ({ centeredText: arr5[0], status: arr5[1] } = tmp);
      obj4.style = items4;
      const intl = tmp2(tmp3[21]).intl;
      obj4.children = intl.string(tmp5(tmp3[22]).v7A3HG);
      let tmp8 = closure_7(tmp2(tmp3[11]).Text, obj4);
      let tmp7 = closure_7;
    } else {
      tmp7 = closure_7;
      const obj5 = { spacing: tmp5(tmp3[6]).space.PX_24, style: tmp.sections, children: memo.map((group) => React5(closure_10, { group, userId, onInvite }, group.application.id)) };
      tmp8 = closure_7(tmp2(tmp3[12]).Stack, obj5);
    }
    const obj6 = { scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
    const intl3 = tmp2(tmp3[21]).intl;
    obj6.dismissAccessibilityLabel = intl3.string(tmp2(tmp3[21]).t.cpT0Cq);
    const obj7 = { spacing: tmp5(tmp3[6]).space.PX_4, style: tmp.header, children: null };
    const obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: null };
    const intl4 = tmp2(tmp3[21]).intl;
    obj8.children = intl4.string(tmp5(tmp3[22])["v5/qxX"]);
    const items5 = [tmp7(tmp2(tmp3[11]).Heading, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
    const intl5 = tmp2(tmp3[21]).intl;
    let str = tmp5(tmp3[23]).getName(stateFromStores);
    if (str == null) {
      str = "";
    }
    const obj10 = { username: str, days };
    obj9.children = intl5.formatToPlainString(tmp5(tmp3[22]).txHfjn, obj10);
    items5[1] = tmp7(tmp2(tmp3[11]).Text, obj9);
    obj7.children = items5;
    obj6.header = closure_8(tmp2(tmp3[12]).Stack, obj7);
    obj6.children = tmp8;
    return tmp7(tmp2(tmp3[24]).ActionSheet, obj6);
  }
  let obj = userId(data[15]);
});