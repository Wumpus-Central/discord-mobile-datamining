// === Module 18373: RolePermissionTemplatesActionSheet ===

// Module 18373 (RolePermissionTemplatesActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import ActionSheet from "ActionSheet" /* 6898 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 18351 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { templateContainer: { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RolePermissionTemplatesActionSheet(permissionsEdited) {
  const cResult = permissionsEdited(576).c(14);
  permissionsEdited = permissionsEdited.permissionsEdited;
  const onPermissionsChanged = permissionsEdited.onPermissionsChanged;
  const guildId = permissionsEdited.guildId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    const items = [];
    cResult[0] = T;
    cResult[1] = items;
    let tmp6 = items;
  } else {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    tmp6 = cResult[1];
  }
  const effect = noop.useEffect(T, tmp6);
  if (cResult[2] !== onPermissionsChanged) {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    cResult[2] = onPermissionsChanged;
    cResult[3] = tmp9;
  } else {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
  }
  dependencyMap = tmp9;
  if (cResult[4] === permissionsEdited) {
    class T {
      constructor() {
        obj = onPermissionsChanged(closure_2[8]);
        obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
        trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = onPermissionsChanged(closure_2[8]);
          obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
          trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
          return;
        }
      }
      let obj2 = { title: null };
      let intl = tmp(1126).intl;
      obj2.title = intl.string(tmp(1126).t.KgCkoQ);
      const tmp12 = jsx(tmp(6838).BottomSheetTitleHeader, { title: null });
      cResult[7] = tmp12;
      const tmp11 = tmp12;
    } else {
      class T {
        constructor() {
          obj = onPermissionsChanged(closure_2[8]);
          obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
          trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
          return;
        }
      }
    }
    if (cResult[8] === guildId) {
      class T {
        constructor() {
          obj = onPermissionsChanged(closure_2[8]);
          obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
          trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
          return;
        }
      }
      if (cResult[11] === tmp4.templateContainer) {
        class T {
          constructor() {
            obj = onPermissionsChanged(closure_2[8]);
            obj1 = { type: closure_1_6.GUILD_ROLE_TEMPLATE_POPOUT };
            trackResult = obj.track(closure_1_5.OPEN_POPOUT, obj1);
            return;
          }
        }
        return tmp18;
      }
      const obj3 = { header: tmp11, startExpanded: true, children: null };
      const obj4 = { style: tmp4.templateContainer, children: tmp13 };
      obj3.children = <View style={tmp4.templateContainer}>{tmp13}</View>;
      const tmp21 = jsx(tmp(6898).ActionSheet, { header: tmp11, startExpanded: true, children: null });
      cResult[11] = tmp4.templateContainer;
      cResult[12] = tmp13;
      cResult[13] = tmp21;
      tmp18 = tmp21;
    }
    const obj5 = { onSelect: tmp10, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId };
    const tmp17 = jsx(onPermissionsChanged(18351), { onSelect: tmp10, location: constants2.GUILD_ROLE_TEMPLATE_POPOUT, guildId });
    cResult[8] = guildId;
    cResult[9] = tmp10;
    cResult[10] = tmp17;
  }
  function handleTemplateSelect(arg0) {
    closure_0 = arg0;
    if (closure_0) {
      const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
      const intl = permissionsEdited(tmp9[12]).intl;
      obj2.title = intl.string(permissionsEdited(tmp9[12]).t.MVdkgB);
      const intl2 = permissionsEdited(tmp9[12]).intl;
      obj2.body = intl2.string(permissionsEdited(tmp9[12]).t.LpogjK);
      const intl3 = permissionsEdited(tmp9[12]).intl;
      obj2.cancelText = intl3.string(permissionsEdited(tmp9[12]).t["ETE/oC"]);
      const intl4 = permissionsEdited(tmp9[12]).intl;
      obj2.confirmText = intl4.string(permissionsEdited(tmp9[12]).t.p89ACt);
      obj2.onConfirm = function onConfirm() {
        dependencyMap(closure_0);
      };
      obj2.onCancel = function onCancel() {
        onPermissionsChanged(5056).hideActionSheet();
      };
      onPermissionsChanged(tmp9[11]).show(obj2);
      const obj = onPermissionsChanged(tmp9[11]);
    } else {
      tmp9(arg0);
    }
  }
  cResult[4] = permissionsEdited;
  cResult[5] = tmp9;
  cResult[6] = handleTemplateSelect;
  let obj = permissionsEdited(576);
}) : (function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT });
  }, []);
  let obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.KgCkoQ);
  const tmp = closure_8();
  let obj2 = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  let obj3 = {
    style: tmp.templateContainer,
    children: jsx(GuildSettingsRoleTemplateDefault, {
      onSelect: function handleTemplateSelect(arg0) {
        closure_0 = arg0;
        if (closure_0) {
          const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
          const intl = util.intl;
          obj4.title = intl.string(util.t.MVdkgB);
          const intl2 = util.intl;
          obj4.body = intl2.string(util.t.LpogjK);
          const intl3 = util.intl;
          obj4.cancelText = intl3.string(util.t["ETE/oC"]);
          const intl4 = util.intl;
          obj4.confirmText = intl4.string(util.t.p89ACt);
          obj4.onConfirm = function onConfirm() {
            importDefault(closure_0);
            closure_1_1(5056).hideActionSheet();
            const obj = closure_1_1(5056);
            const result = closure_0(4808).roleTemplateAppliedToast();
          };
          obj4.onCancel = function onCancel() {
            closure_1_1(5056).hideActionSheet();
          };
          AlertActionCreatorsDefault.show(obj4);
        } else {
          closure_1(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
          let result = ToastUtils.roleTemplateAppliedToast();
        }
      },
      location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  };
  obj2.children = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, {
    onSelect: function handleTemplateSelect(arg0) {
      closure_0 = arg0;
      if (closure_0) {
        const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false, isDismissable: false };
        const intl = util.intl;
        obj4.title = intl.string(util.t.MVdkgB);
        const intl2 = util.intl;
        obj4.body = intl2.string(util.t.LpogjK);
        const intl3 = util.intl;
        obj4.cancelText = intl3.string(util.t["ETE/oC"]);
        const intl4 = util.intl;
        obj4.confirmText = intl4.string(util.t.p89ACt);
        obj4.onConfirm = function onConfirm() {
          importDefault(closure_0);
          closure_1_1(5056).hideActionSheet();
          const obj = closure_1_1(5056);
          const result = closure_0(4808).roleTemplateAppliedToast();
        };
        obj4.onCancel = function onCancel() {
          closure_1_1(5056).hideActionSheet();
        };
        AlertActionCreatorsDefault.show(obj4);
      } else {
        closure_1(arg0);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        let result = ToastUtils.roleTemplateAppliedToast();
      }
    },
    location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: guildId.guildId
  })}</View>;
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null });
});