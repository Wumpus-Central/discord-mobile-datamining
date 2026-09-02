// === Module 16669: handleSetRegion ===

// Module 16669 (handleSetRegion)
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import TableRadioRow from "TableRadioRow" /* 7702 */;
import Form from "Form" /* 8372 */;
import closure_3 from "_toArray" /* 850 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "initialize" /* 16625 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const AUTOMATIC_RTC_REGION = "AUTOMATIC_RTC_REGION";
createCacheKey = { form: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class ChannelSettingsChangeRTCRegion extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { regions: [], submitting: false, selectedRegionId: AUTOMATIC_RTC_REGION };
    channel = applyArgumentsResult.props.channel;
    tmp3 = AUTOMATIC_RTC_REGION;
    regions = closure_5.getRegions(channel.getGuildId());
    obj = { id: AUTOMATIC_RTC_REGION, name: null, sample_hostname: "", sample_port: 0, vip: false, deprecated: false, optimal: false, hidden: false };
    intl = require("getSystemLocale").intl;
    obj[1] = intl.string(require("getSystemLocale").t.JEmsap);
    items = [];
    items[0] = obj;
    if (null != regions) {
      push = items.push;
      items1 = [];
      num = 0;
      tmp4 = items1;
      arraySpreadResult = HermesBuiltin.arraySpread(regions.filter((deprecated) => {
        deprecated = deprecated.deprecated;
        let tmp = !deprecated;
        if (!deprecated) {
          tmp = !deprecated.hidden;
        }
        return tmp;
      }), 0);
      tmp6 = push;
      tmp7 = items1;
      tmp8 = items;
      applyResult = HermesBuiltin.apply(items1, items);
      found = regions.find((id) => id.id === applyArgumentsResult.props.channel.rtcRegion);
      id = undefined;
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = tmp3;
      }
      obj.selectedRegionId = id;
    }
    obj.regions = items;
    applyArgumentsResult.state = obj;
    return applyArgumentsResult;
  }
}
const prototype = ChannelSettingsChangeRTCRegion.prototype;
prototype["handleSetRegion"] = function handleSetRegion(arg0) {
  let self = this;
  self = this;
  let tmp = arg0;
  c0 = arg0;
  let tmp2 = arg0;
  if (arg0 == null) {
    tmp2 = AUTOMATIC_RTC_REGION;
  }
  this.state.selectedRegionId = tmp2;
  if (tmp === AUTOMATIC_RTC_REGION) {
    c0 = null;
    tmp = null;
  }
  self(8767).updateChannel({ rtcRegion: tmp });
  self.setState({ submitting: true }, () => {
    let obj = self(closure_1_2[9]);
    obj = { rtcRegion: c0 };
    obj.saveChannel(self.props.channel.id, obj);
  });
};
prototype["renderRegion"] = function renderRegion(label) {
  return jsx(TableRadioRow.TableRadioRow, { label: label.name, value: label.id }, label.id);
};
prototype["renderRegions"] = function renderRegions() {
  const self = this;
  const substr = callback(this.state.regions).slice(0);
  const mapped = substr.map(this.renderRegion, this);
  return jsx(self(7701).TableRadioGroup, {
    defaultValue: this.state.selectedRegionId,
    onChange(arg0) {
      return self.handleSetRegion(arg0);
    },
    hasIcons: false,
    children: mapped
  });
};
prototype["render"] = function render() {
  const tmp = callback2(this.context);
  return jsx(Form.Form, { style: callback2(this.context).form, children: this.renderRegions() });
};
ChannelSettingsChangeRTCRegion.contextType = require("ManaContext").ThemeContext;
const result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  channelId = channelId.channelId;
  const items = [closure_4];
  const channel = channelId(586).useStateFromStores(items, () => closure_1_4.getChannel(channelId));
  _modDef38(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <ChannelSettingsChangeRTCRegion channel={channel} />;
};