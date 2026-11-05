// === Module 20119: RolePermissionTemplatesActionSheet ===

// Module 20119 (RolePermissionTemplatesActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import ToastUtils from "ToastUtils" /* 5848 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6096 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7460 */;
import ActionSheet from "ActionSheet" /* 7504 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 20097 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: closure_6 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { templateContainer: { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx");

export default function RolePermissionTemplatesActionSheet(guildId) {
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
            closure_1_1(5384).hideActionSheet();
            const obj = closure_1_1(5384);
            const result = closure_0(5848).roleTemplateAppliedToast();
          };
          obj4.onCancel = function onCancel() {
            closure_1_1(5384).hideActionSheet();
          };
          AlertActionCreatorsDefault.show(obj4);
        } else {
          closure_1(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
          let result = ToastUtils.roleTemplateAppliedToast();
        }
      },
      location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
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
          closure_1_1(5384).hideActionSheet();
          const obj = closure_1_1(5384);
          const result = closure_0(5848).roleTemplateAppliedToast();
        };
        obj4.onCancel = function onCancel() {
          closure_1_1(5384).hideActionSheet();
        };
        AlertActionCreatorsDefault.show(obj4);
      } else {
        closure_1(arg0);
        ActionSheetActionCreatorsDefault.hideActionSheet();
        let result = ToastUtils.roleTemplateAppliedToast();
      }
    },
    location: constants.GUILD_ROLE_TEMPLATE_POPOUT,
    guildId: guildId.guildId
  })}</View>;
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null }), startExpanded: true, children: null });
};