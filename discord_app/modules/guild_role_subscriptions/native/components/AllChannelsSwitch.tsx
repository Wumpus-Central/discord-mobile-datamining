// === Module 19850: AllChannelsSwitch ===

// Module 19850 (AllChannelsSwitch)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import TableRow from "TableRow" /* 6963 */;
import TableRadioRow from "TableRadioRow" /* 7044 */;
import TableRadioGroup from "TableRadioGroup" /* 7045 */;
import _modDef19851 from "module_19851" /* 19851 */;
import _modDef19852 from "module_19852" /* 19852 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AllChannelAccessOptions = fn(17094).AllChannelAccessOptions;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AllChannelsSwitch(channelAccessFormat) {
  const cResult = c.c(19);
  channelAccessFormat = channelAccessFormat.channelAccessFormat;
  const setChannelAccessFormat = channelAccessFormat.setChannelAccessFormat;
  ({ style, disabled } = channelAccessFormat);
  if (cResult[0] === channelAccessFormat) {
    if (cResult[1] === setChannelAccessFormat) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: _modDef19851 };
      const tmp11 = hasOwnProperty(TableRow.TableRow.Icon, obj2);
      const intl = util.intl;
      const stringResult = intl.string(util.t["vs2T+B"]);
      cResult[3] = tmp11;
      cResult[4] = stringResult;
      let tmp8 = stringResult;
      let tmp7 = tmp11;
    } else {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      const obj3 = { value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS, icon: tmp7, label: tmp8, disabled: tmp4 };
      const tmp16 = hasOwnProperty(TableRadioRow.TableRadioRow, obj3);
      cResult[5] = tmp4;
      cResult[6] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { source: _modDef19852 };
      const tmp21 = hasOwnProperty(TableRow.TableRow.Icon, obj4);
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.l4Tr7X);
      cResult[7] = tmp21;
      cResult[8] = stringResult1;
      let tmp18 = stringResult1;
      let tmp17 = tmp21;
    } else {
      tmp17 = cResult[7];
      tmp18 = cResult[8];
    }
    if (cResult[9] !== tmp4) {
      const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: tmp17, label: tmp18, disabled: tmp4 };
      const tmp26 = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
      cResult[9] = tmp4;
      cResult[10] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[10];
    }
    if (cResult[11] === channelAccessFormat) {
      if (cResult[12] === tmp5) {
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp23) {
            let tmp27 = cResult[15];
          }
          if (cResult[16] === style) {
            if (cResult[17] === tmp27) {
              let tmp30 = cResult[18];
            }
            return tmp30;
          }
          const obj6 = { style, children: tmp27 };
          const tmp33 = hasOwnProperty(View, obj6);
          cResult[16] = style;
          cResult[17] = tmp27;
          cResult[18] = tmp33;
          tmp30 = tmp33;
        }
      }
    }
    const obj7 = { hasIcons: true, value: channelAccessFormat, onChange: tmp5, children: null };
    const items = [tmp13, tmp23];
    obj7.children = items;
    const tmp29 = timestampProducer(TableRadioGroup.TableRadioGroup, obj7);
    cResult[11] = channelAccessFormat;
    cResult[12] = tmp5;
    cResult[13] = tmp13;
    cResult[14] = tmp23;
    cResult[15] = tmp29;
    tmp27 = tmp29;
  }
  const fn = function t(arg0) {
    if (arg0 !== channelAccessFormat) {
      setChannelAccessFormat(arg0);
    }
  };
  cResult[0] = channelAccessFormat;
  cResult[1] = setChannelAccessFormat;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function AllChannelsSwitch(channelAccessFormat) {
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
  const obj3 = { value: AllChannelAccessOptions.SOME_CHANNELS_ACCESS, icon: hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19851 }), label: null, disabled: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["vs2T+B"]);
  obj3.disabled = disabled;
  const items = [hasOwnProperty(TableRadioRow.TableRadioRow, obj3), ];
  const obj5 = { value: AllChannelAccessOptions.ALL_CHANNELS_ACCESS, icon: null, label: null, disabled: null };
  const obj4 = { source: _modDef19851 };
  obj5.icon = hasOwnProperty(TableRow.TableRow.Icon, { source: _modDef19852 });
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.l4Tr7X);
  obj5.disabled = disabled;
  items[1] = hasOwnProperty(TableRadioRow.TableRadioRow, obj5);
  obj2.children = items;
  obj.children = timestampProducer(TableRadioGroup.TableRadioGroup, obj2);
  return hasOwnProperty(View, obj);
});