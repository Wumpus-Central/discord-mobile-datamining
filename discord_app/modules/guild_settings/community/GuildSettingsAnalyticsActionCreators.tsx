// === Module 17918: GuildSettingsAnalyticsActionCreators ===

// Module 17918 (GuildSettingsAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["interval_start_timestamp", "pct_retained"];
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsActionCreators.tsx");

export const fetchEngagementOverview = function fetchEngagementOverview(guildId) {
  let obj;
  let obj5;
  _require = guildId;
  const GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW = Endpoints.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW;
  const date = new Date();
  const time = date.getTime();
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW(guildId), query: obj, oldFormErrors: true, rejectWithError: obj5.rejectWithMigratedError() };
  const get = HTTP.get;
  obj = { start: date1.toISOString(), end: date.toISOString(), interval: 2 };
  obj5 = require("HTTPUtils");
  const value = get(request);
  return value.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS", guildId, stats: body.slice(0, 2) };
    obj.dispatch(obj2);
  }, (body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE", error: body.body };
    obj.dispatch(obj2);
  });
};
export const fetchGrowthActivationOverview = function fetchGrowthActivationOverview(guildId) {
  let obj;
  let obj5;
  _require = guildId;
  const GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW = Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW;
  const date = new Date();
  const time = date.getTime();
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW(guildId), query: obj, oldFormErrors: true, rejectWithError: obj5.rejectWithMigratedError() };
  const get = HTTP.get;
  obj = { start: date1.toISOString(), end: date.toISOString(), interval: 2 };
  obj5 = require("HTTPUtils");
  const value = get(request);
  return value.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS", guildId, stats: body.slice(0, 2) };
    obj.dispatch(obj2);
  }, (body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE", error: body.body };
    obj.dispatch(obj2);
  });
};
export const fetchGrowthActivationRetention = function fetchGrowthActivationRetention(guildId) {
  let obj;
  let obj5;
  _require = guildId;
  const GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION = Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION;
  const date = new Date();
  const time = date.getTime();
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION(guildId), query: obj, oldFormErrors: true, rejectWithError: obj5.rejectWithMigratedError() };
  const get = HTTP.get;
  obj = { start: date1.toISOString(), end: date.toISOString(), interval: 2 };
  obj5 = require("HTTPUtils");
  const value = get(request);
  return value.then((body) => {
    body = body.body;
    const found = body.filter((item) => item.hasOwnProperty("pct_retained"));
    const mapped = found.map((item) => {
      let interval_start_timestamp;
      let pct_retained;
      ({ interval_start_timestamp, pct_retained } = item);
      closure_1_4(item, closure_1_3);
      return { interval_start_timestamp, pct_retained };
    });
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS", guildId, stats: mapped.slice(0, 2) };
    obj.dispatch(obj2);
  }, (body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE", error: body.body };
    obj.dispatch(obj2);
  });
};