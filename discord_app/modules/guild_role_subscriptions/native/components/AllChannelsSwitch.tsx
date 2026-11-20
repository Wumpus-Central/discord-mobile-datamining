// === Module 19910: AllChannelsSwitch ===

// Module 19910 (AllChannelsSwitch)
import util from "util" /* 1112 */;
import TableRow from "TableRow" /* 6925 */;
import TableRadioGroup from "TableRadioGroup" /* 7227 */;
import TableRadioRow from "TableRadioRow" /* 7229 */;
import _modDef19911 from "module_19911" /* 19911 */;
import _modDef19912 from "module_19912" /* 19912 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AllChannelAccessOptions = fn(16508).AllChannelAccessOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
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
    children: null
  };
  const obj3 = { value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS, icon: hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19911 }), label: null, disabled: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["vs2T+B"]);
  obj3.disabled = disabled;
  items = [hasOwnProperty(TableRadioRow.TableRadioRow, obj3), ];
  const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: null, label: null, disabled: null };
  const obj4 = { source: _modDef19911 };
  obj5.icon = hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19912 });
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.l4Tr7X);
  obj5.disabled = disabled;
  items[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
  obj2.children = items;
  obj.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj2);
  return hasOwnProperty(View, obj);
};