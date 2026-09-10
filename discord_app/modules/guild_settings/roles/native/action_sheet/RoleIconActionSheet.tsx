// discord_app/modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import GuildSettingsRolesActionCreators from "../../GuildSettingsRolesActionCreators.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildSettingsRolesStore from "../../GuildSettingsRolesStore.tsx";

require = fn;
const UPLOAD_SMALL_SIZE = fn(1074).UPLOAD_SMALL_SIZE;
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["image/png", "image/jpeg"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/RoleIconActionSheet.tsx");

export default function RoleIconActionSheet(arg0) {
  ({ guildId: require, roleId } = arg0);
  dependencyMap = async function _handleUploadImage() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            let base64;
            let mimeType;
            tmp2(tmp5[7]).hideActionSheet();
            const obj8 = tmp2(tmp5[7]);
            let obj1 = { size, preferredMimeType: "image/png" };
            c3 = 1;
            c4 = 1;
            let obj2 = { value: _var(tmp5[8]).openImagePicker(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = value;
          base64 = closure_129_0.base64;
          mimeType = closure_129_0.mimeType;
          if (null == base64) {
            c4 = 3;
          } else {
            _var = mimeType;
            if (mimeType == null) {
              _var = "";
            }
            if (closure_1_9.includes(_var)) {
              obj = _var(tmp5[9]);
              if (dataUriFileSizeResult <= _var(tmp5[10]).ROLE_ICON_MAX_FILE_SIZE) {
                obj1 = _var(tmp5[13]);
                obj1.updateRoleIcon(closure_130_1, base64, null);
              }
              dataUriFileSizeResult = obj.dataUriFileSize(base64);
            }
          }
          obj2 = _var(tmp5[11]);
          const intl = _var(tmp5[12]).intl;
          obj2.presentError(intl.string(_var(tmp5[12]).t.HFyKsa));
        }
      } catch (tmp30) {
        c4 = tmp;
        throw tmp30;
      }
    }
  };
  let obj = initialize;
  const items = [GuildSettingsRolesStore];
  const items1 = [roleId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const role = GuildSettingsRolesStore.getRole(roleId);
      let icon;
      if (role != null) {
        icon = role.icon;
      }
      let tmp3 = null != icon;
      if (!tmp3) {
        let unicodeEmoji;
        if (role != null) {
          unicodeEmoji = role.unicodeEmoji;
        }
        tmp3 = null != unicodeEmoji;
      }
      return tmp3;
    },
    items1,
  );
  obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.B9grJw);
  const items2 = [closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), ,];
  obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.I3YQeV);
  items2[1] = closure_7(Text_Text.Text, obj);
  let obj1 = { label: null, subLabel: null, onPress: null };
  const intl3 = util.intl;
  obj1.label = intl3.string(util.t.royWSB);
  const intl4 = util.intl;
  obj1.subLabel = intl4.string(util.t["mz++Qq"]);
  obj1.onPress = function handleUploadImage() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items3 = [closure_7(TableRow.TableRow, obj1), ,];
  let obj2 = { label: null, onPress: null };
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t["/Ny2wZ"]);
  obj2.onPress = function handleSelectEmoji() {
    guildId(11193);
    let obj = { guildId, pickerIntention: constants.COMMUNITY_CONTENT, onPressEmoji: null };
    guildId = asyncGeneratorStep(async (arg0) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_5 = tmp3;
              if (null == closure_0.id) {
                const optionallyDiverseSequence = closure_0.optionallyDiverseSequence;
                let surrogates = optionallyDiverseSequence;
                if (optionallyDiverseSequence == null) {
                  surrogates = closure_0.surrogates;
                }
                if (null != surrogates) {
                  closure_0(17717).updateRoleIcon(surrogates, null, tmp26);
                  const obj5 = closure_0(17717);
                }
              } else {
                c6 = 1;
                const tmp22 = closure_0(17717);
                closure_4 = tmp22;
                const updateRoleIcon = tmp22.updateRoleIcon;
                closure_2 = surrogates;
                c7 = 2;
                c8 = 1;
                let obj1 = { value: closure_0(17721).fetchCustomEmojiAsPngDataUri(closure_0.id), done: false };
                return obj1;
              }
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              obj1 = closure_0(4302);
              const intl = closure_0(1114).intl;
              obj1.presentError(intl.string(closure_0(1114).t.R0RpRX));
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 !== 2) {
              updateRoleIcon(closure_2, value, null);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          c8 = 3;
        } catch (tmp31) {
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp31;
          } else {
            c7 = tmp;
          }
        }
      }
    });
    obj.onPressEmoji = function onPressEmoji(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const result = obj.openEmojiPickerActionSheet(obj, "stack");
  };
  items3[1] = closure_7(TableRow.TableRow, obj2);
  let tmp5Result = null;
  if (stateFromStores) {
    let obj3 = { variant: "danger", label: null, onPress: null };
    const intl6 = util.intl;
    obj3.label = intl6.string(util.t["uY+Nk/"]);
    obj3.onPress = function handleRemoveIcon() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      GuildSettingsRolesActionCreators.updateRoleIcon(roleId, null, null);
    };
    tmp5Result = closure_7(TableRow.TableRow, obj3);
  }
  const obj4 = { children: null };
  items3[2] = tmp5Result;
  items2[2] = closure_8(TableRowGroup.TableRowGroup, { hasIcons: false, children: items3 });
  obj4.children = items2;
  return closure_8(ActionSheet.ActionSheet, obj4);
}
