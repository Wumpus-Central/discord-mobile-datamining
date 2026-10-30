// discord_app/modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
import util from "../../../../intl/index.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import _modDef19914 from "../../../../../_runtime/metro/19914__.js";
import _modDef19915 from "../../../../../_runtime/metro/19915__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const AllChannelAccessOptions = fn(17148).AllChannelAccessOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(channelAccessFormat) {
  channelAccessFormat = channelAccessFormat.channelAccessFormat;
  ({ setChannelAccessFormat: importDefault, disabled } = channelAccessFormat);
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = { style: channelAccessFormat.style, children: null };
  const obj2 = {
    hasIcons: true,
    value: channelAccessFormat,
    onChange(arg0) {
      if (arg0 !== channelAccessFormat) {
        importDefault(arg0);
      }
    },
    children: null,
  };
  const obj3 = {
    value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS,
    icon: hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19914 }),
    label: null,
    disabled: null,
  };
  const intl = util.intl;
  obj3.label = intl.string(util.t["vs2T+B"]);
  obj3.disabled = disabled;
  const items = [hasOwnProperty(TableRadioRow.TableRadioRow, obj3)];
  const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: null, label: null, disabled: null };
  const obj4 = { source: _modDef19914 };
  obj5.icon = hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19915 });
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.l4Tr7X);
  obj5.disabled = disabled;
  items[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
  obj2.children = items;
  obj.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj2);
  return hasOwnProperty(View, obj);
}
