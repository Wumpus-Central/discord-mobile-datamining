// discord_app/modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AlertActionCreatorsDefault from "../../../../../actions/AlertActionCreators.tsx";
import BottomSheetTitleHeader2 from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet2 from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Constants from "../../../../../Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_0,
  hideActionSheetResult,
  intl2,
  intl3,
  intl4,
  obj1,
  permissionsEdited,
  show,
  showResult,
  tmp2,
  tmp5,
  tmp7,
  trackResult;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsx = Fragment.jsx;
let obj = { templateContainer: obj2 };
obj2 = { paddingVertical: 16, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (permissionsEdited) => {
      let tmp17;
      let tmp6;
      let tmp = permissionsEdited;
      let obj = permissionsEdited(E[7]);
      const cResult = obj.c(14);
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
        tmp6 = items;
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
      const effect = react.useEffect(T, tmp6);
      if (cResult[2] !== onPermissionsChanged) {
        class E {
          constructor(arg0) {
            tmp = onPermissionsChanged(permissionsEdited);
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[10]);
            result = obj2.roleTemplateAppliedToast();
            return;
          }
        }
        cResult[2] = onPermissionsChanged;
        cResult[3] = E;
      } else {
        class E {
          constructor(arg0) {
            tmp = onPermissionsChanged(permissionsEdited);
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[10]);
            result = obj2.roleTemplateAppliedToast();
            return;
          }
        }
      }
      E = tmp8;
      if (cResult[4] === permissionsEdited) {
        let tmp10;
        class E {
          constructor(arg0) {
            tmp = onPermissionsChanged(permissionsEdited);
            obj = closure_1(closure_2[9]);
            hideActionSheetResult = obj.hideActionSheet();
            obj2 = closure_0(closure_2[10]);
            result = obj2.roleTemplateAppliedToast();
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor(arg0) {
              tmp = onPermissionsChanged(permissionsEdited);
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[10]);
              result = obj2.roleTemplateAppliedToast();
              return;
            }
          }
          const BottomSheetTitleHeader = tmp(tmp2[13]).BottomSheetTitleHeader;
          let intl = tmp(tmp2[12]).intl;
          const tmp11 = <BottomSheetTitleHeader title={intl.string(tmp(E[12]).t.KgCkoQ)} />;
          cResult[7] = tmp11;
          tmp10 = tmp11;
        } else {
          class E {
            constructor(arg0) {
              tmp = onPermissionsChanged(permissionsEdited);
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[10]);
              result = obj2.roleTemplateAppliedToast();
              return;
            }
          }
        }
        if (cResult[8] === guildId) {
          class E {
            constructor(arg0) {
              tmp = onPermissionsChanged(permissionsEdited);
              obj = closure_1(closure_2[9]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[10]);
              result = obj2.roleTemplateAppliedToast();
              return;
            }
          }
          if (cResult[11] === tmp4.templateContainer) {
            class E {
              constructor(arg0) {
                tmp = onPermissionsChanged(permissionsEdited);
                obj = closure_1(closure_2[9]);
                hideActionSheetResult = obj.hideActionSheet();
                obj2 = closure_0(closure_2[10]);
                result = obj2.roleTemplateAppliedToast();
                return;
              }
            }
            return tmp17;
          }
          const ActionSheet = tmp(tmp2[15]).ActionSheet;
          const tmp20 = (
            <ActionSheet header={tmp10} startExpanded>
              {null}
            </ActionSheet>
          );
          cResult[11] = tmp4.templateContainer;
          cResult[12] = tmp12;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        cResult[8] = guildId;
        cResult[9] = O;
        cResult[10] = jsx(onPermissionsChanged(E[14]), {
          onSelect: O,
          location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
          guildId,
        });
        const tmp16 = jsx(onPermissionsChanged(E[14]), {
          onSelect: O,
          location: constants2.GUILD_ROLE_TEMPLATE_POPOUT,
          guildId,
        });
      }
      class O {
        constructor(arg0) {
          closure_0 = permissionsEdited;
          tmp = closure_0;
          if (tmp) {
            tmp4 = onPermissionsChanged;
            tmp5 = closure_2;
            tmp6 = onPermissionsChanged(closure_2[11]);
            obj = {
              title: null,
              body: null,
              cancelText: null,
              confirmText: null,
              onConfirm: null,
              onCancel: null,
              hideActionSheet: false,
              isDismissable: false,
            };
            tmp7 = permissionsEdited;
            show = tmp6.show;
            intl = permissionsEdited(closure_2[12]).intl;
            obj.title = intl.string(permissionsEdited(closure_2[12]).t.MVdkgB);
            intl2 = permissionsEdited(closure_2[12]).intl;
            obj.body = intl2.string(permissionsEdited(closure_2[12]).t.LpogjK);
            intl3 = permissionsEdited(closure_2[12]).intl;
            obj.cancelText = intl3.string(permissionsEdited(closure_2[12]).t["ETE/oC"]);
            intl4 = permissionsEdited(closure_2[12]).intl;
            obj.confirmText = intl4.string(permissionsEdited(closure_2[12]).t.p89ACt);
            obj.onConfirm = function onConfirm() {
              /* body not rendered: F149158 */
            };
            obj.onCancel = function onCancel() {
              /* body not rendered: F149159 */
            };
            showResult = show(obj);
          } else {
            tmp2 = closure_2;
            tmp3 = closure_2(permissionsEdited);
          }
          return;
        }
      }
      cResult[4] = permissionsEdited;
      cResult[5] = tmp8;
      cResult[6] = O;
    }
  : (guildId) => {
      let require;
      ({ permissionsEdited: require, onPermissionsChanged: importDefault } = guildId);
      guildId = guildId.guildId;
      let tmp = closure_8();
      const effect = react.useEffect(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: constants2.GUILD_ROLE_TEMPLATE_POPOUT };
        obj.track(constants.OPEN_POPOUT, obj2);
      }, []);
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      let intl = intl5.intl;
      let obj3 = { style: tmp.templateContainer, children: null };
      const tmp3 = <BottomSheetTitleHeader title={intl.string(intl5.t.KgCkoQ)} />;
      const ActionSheet = ActionSheet2.ActionSheet;
      return (
        <ActionSheet header={tmp3} startExpanded>
          {null}
        </ActionSheet>
      );
    };
let result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/action_sheet/RolePermissionTemplatesActionSheet.tsx",
);

export default tmp3;
