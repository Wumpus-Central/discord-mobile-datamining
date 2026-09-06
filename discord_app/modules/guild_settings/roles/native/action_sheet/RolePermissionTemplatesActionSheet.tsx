// === Module 17633: RolePermissionTemplatesActionSheet ===

// Module 17633 (RolePermissionTemplatesActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7149 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 17613 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { templateContainer: null };
createStyles = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.templateContainer = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
  ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
  const effect = noop.useEffect(() => {
    const obj = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
    obj.track(constants.OPEN_POPOUT, obj);
  }, []);
  let obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.KgCkoQ);
  const tmp = closure_8();
  obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null };
  obj = {
    style: tmp.templateContainer,
    children: jsx(GuildSettingsRoleTemplateDefault, {
      onSelect(arg0) {
        closure_0 = arg0;
        if (closure_0) {
          let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
          const intl = util.intl;
          obj.title = intl.string(util.t.MVdkgB);
          const intl2 = util.intl;
          obj.body = intl2.string(util.t.LpogjK);
          const intl3 = util.intl;
          obj.cancelText = intl3.string(util.t["ETE/oC"]);
          const intl4 = util.intl;
          obj.confirmText = intl4.string(util.t.p89ACt);
          obj.onConfirm = function onConfirm() {
            importDefault(closure_0);
            closure_1_1(4527).hideActionSheet();
            const obj = closure_1_1(4527);
            const result = closure_0(4258).roleTemplateAppliedToast();
          };
          obj.onCancel = function onCancel() {
            closure_1_1(4527).hideActionSheet();
          };
          AlertActionCreatorsDefault.show(obj);
        } else {
          closure_1(arg0);
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let result = ToastUtils.roleTemplateAppliedToast();
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  };
  obj.children = <View style={tmp.templateContainer}>{jsx(GuildSettingsRoleTemplateDefault, {
    onSelect(arg0) {
      closure_0 = arg0;
      if (closure_0) {
        let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
        const intl = util.intl;
        obj.title = intl.string(util.t.MVdkgB);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t.LpogjK);
        const intl3 = util.intl;
        obj.cancelText = intl3.string(util.t["ETE/oC"]);
        const intl4 = util.intl;
        obj.confirmText = intl4.string(util.t.p89ACt);
        obj.onConfirm = function onConfirm() {
          importDefault(closure_0);
          closure_1_1(4527).hideActionSheet();
          const obj = closure_1_1(4527);
          const result = closure_0(4258).roleTemplateAppliedToast();
        };
        obj.onCancel = function onCancel() {
          closure_1_1(4527).hideActionSheet();
        };
        AlertActionCreatorsDefault.show(obj);
      } else {
        closure_1(arg0);
        obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        let result = ToastUtils.roleTemplateAppliedToast();
      }
    },
    location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: guildId.guildId
  })}</View>;
  return jsx(ActionSheet.ActionSheet, {
    style: tmp.templateContainer,
    children: jsx(GuildSettingsRoleTemplateDefault, {
      onSelect(arg0) {
        closure_0 = arg0;
        if (closure_0) {
          let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
          const intl = util.intl;
          obj.title = intl.string(util.t.MVdkgB);
          const intl2 = util.intl;
          obj.body = intl2.string(util.t.LpogjK);
          const intl3 = util.intl;
          obj.cancelText = intl3.string(util.t["ETE/oC"]);
          const intl4 = util.intl;
          obj.confirmText = intl4.string(util.t.p89ACt);
          obj.onConfirm = function onConfirm() {
            importDefault(closure_0);
            closure_1_1(4527).hideActionSheet();
            const obj = closure_1_1(4527);
            const result = closure_0(4258).roleTemplateAppliedToast();
          };
          obj.onCancel = function onCancel() {
            closure_1_1(4527).hideActionSheet();
          };
          AlertActionCreatorsDefault.show(obj);
        } else {
          closure_1(arg0);
          obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let result = ToastUtils.roleTemplateAppliedToast();
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
      guildId: guildId.guildId
    })
  });
};