// === Module 17844: RolePermissionTemplatesActionSheet ===

// Module 17844 (RolePermissionTemplatesActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4335 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4982 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7259 */;
import ActionSheet from "ActionSheet" /* 7307 */;
import GuildSettingsRoleTemplateDefault from "GuildSettingsRoleTemplate" /* 17822 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
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
      onSelect(arg0) {
        closure_0 = arg0;
        if (closure_0) {
          const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
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
            closure_1_1(4605).hideActionSheet();
            const obj = closure_1_1(4605);
            const result = closure_0(4335).roleTemplateAppliedToast();
          };
          obj4.onCancel = function onCancel() {
            closure_1_1(4605).hideActionSheet();
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
    onSelect(arg0) {
      closure_0 = arg0;
      if (closure_0) {
        const obj4 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, hideActionSheet: false };
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
          closure_1_1(4605).hideActionSheet();
          const obj = closure_1_1(4605);
          const result = closure_0(4335).roleTemplateAppliedToast();
        };
        obj4.onCancel = function onCancel() {
          closure_1_1(4605).hideActionSheet();
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