// discord_app/modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { guildIcon: null, title: null, description: null, container: null };
createStyles = { marginBottom: 16, borderRadius: nativeDefault.radii.sm };
createStyles.guildIcon = createStyles;
createStyles.title = { marginBottom: 8, textAlign: "center" };
createStyles.description = { textAlign: "center" };
createStyles.container = { alignItems: "center", justifyContent: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = closure_6();
  let obj = { confirmText: null, onConfirm: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["X0WK+6"]);
  obj.onConfirm = onClose;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.guildIcon, guild, size: null };
  const tmp2 = common_AlertDefault;
  obj.size = GuildIcon.GuildIconSizes.XLARGE;
  const items = [React4(GuildIconDefault, obj), ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "text-lg/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.CueiPY);
  items[1] = React4(Text_Text.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj2.children = intl3.format(util.t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = React4(Text_Text.Text, obj2);
  obj.children = items;
  obj.children = hasOwnProperty(View, obj);
  return React4(tmp2, obj);
}
