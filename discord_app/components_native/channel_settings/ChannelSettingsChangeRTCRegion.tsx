// discord_app/components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx
import _toArray from "_toArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import initialize from "initialize";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { PureComponent } from "noop";
import importAllResult from "noop";

let require = arg1;
const AUTOMATIC_RTC_REGION = "AUTOMATIC_RTC_REGION";
createCacheKey = { form: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
class ChannelSettingsChangeRTCRegion extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = { regions: [], submitting: false, selectedRegionId: AUTOMATIC_RTC_REGION };
    channel = applyArgumentsResult.props.channel;
    tmp3 = AUTOMATIC_RTC_REGION;
    regions = __esModule.getRegions(channel.getGuildId());
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
  let c0 = arg0;
  let tmp2 = arg0;
  if (arg0 == null) {
    tmp2 = AUTOMATIC_RTC_REGION;
  }
  this.state.selectedRegionId = tmp2;
  if (tmp === AUTOMATIC_RTC_REGION) {
    c0 = null;
    tmp = null;
  }
  self(7691).updateChannel({ rtcRegion: tmp });
  self.setState({ submitting: true }, () => {
    let obj = self(outer1_2[9]);
    obj = { rtcRegion: c0 };
    obj.saveChannel(self.props.channel.id, obj);
  });
};
prototype["renderRegion"] = function renderRegion(label) {
  return jsx(require(7659) /* TableRadioRow */.TableRadioRow, { label: label.name, value: label.id }, label.id);
};
prototype["renderRegions"] = function renderRegions() {
  const self = this;
  const substr = callback(this.state.regions).slice(0);
  const mapped = substr.map(this.renderRegion, this);
  return jsx(self(7660).TableRadioGroup, {
    defaultValue: this.state.selectedRegionId,
    onChange(arg0) {
      return self.handleSetRegion(arg0);
    },
    hasIcons: false,
    children: mapped
  });
};
prototype["render"] = function render() {
  const obj = { style: createCacheKey(this.context).form, children: null };
  obj[1] = this.renderRegions();
  return jsx(require(7639) /* Form */.Form, { style: createCacheKey(this.context).form, children: null });
};
ChannelSettingsChangeRTCRegion.contextType = require("ManaContext").ThemeContext;
const result = require("ensureGuildLoaded").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx");

export default function ConnectedChannelSettingsChangeRTCRegion(channelId) {
  channelId = channelId.channelId;
  const items = [ensureGuildLoaded];
  const channel = channelId(589).useStateFromStores(items, () => outer1_4.getChannel(channelId));
  importDefault(38)(null != channel, "ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined");
  return <ChannelSettingsChangeRTCRegion channel={channel} />;
};