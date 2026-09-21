// === Module 18134: GuildSettingsAnalyticsActionCreators ===

// Module 18134 (GuildSettingsAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["interval_start_timestamp", "pct_retained"];
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/GuildSettingsAnalyticsActionCreators.tsx");

export const fetchEngagementOverview = function fetchEngagementOverview(guildId) {
  _require = guildId;
  const date = new Date();
  const time = date.getTime();
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW(guildId), query: null, oldFormErrors: true, rejectWithError: null };
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  request.query = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  let obj = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  value = HTTP.get(request);
  return value.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS", guildId, stats: body.slice(0, 2) });
  }, (body) => {
    DispatcherDefault.dispatch({ type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE", error: body.body });
  });
};
export const fetchGrowthActivationOverview = function fetchGrowthActivationOverview(guildId) {
  _require = guildId;
  const date = new Date();
  const time = date.getTime();
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW(guildId), query: null, oldFormErrors: true, rejectWithError: null };
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  request.query = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  let obj = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  value = HTTP.get(request);
  return value.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS", guildId, stats: body.slice(0, 2) });
  }, (body) => {
    DispatcherDefault.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE", error: body.body });
  });
};
export const fetchGrowthActivationRetention = function fetchGrowthActivationRetention(guildId) {
  _require = guildId;
  const date = new Date();
  const time = date.getTime();
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION(guildId), query: null, oldFormErrors: true, rejectWithError: null };
  const date1 = new Date(time - 86400000 * (date.getDay() + 1) - 3628800000);
  request.query = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  let obj = { start: new Date(time - 86400000 * (date.getDay() + 1) - 3628800000).toISOString(), end: date.toISOString(), interval: 2 };
  request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
  value = HTTP.get(request);
  return value.then((body) => {
    body = body.body;
    const found = body.filter((item) => item.hasOwnProperty("pct_retained"));
    const mapped = found.map((item) => {
      ({ interval_start_timestamp, pct_retained } = item);
      closure_1_4(item, closure_1_3);
      return { interval_start_timestamp, pct_retained };
    });
    const obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS", guildId, stats: mapped.slice(0, 2) });
  }, (body) => {
    DispatcherDefault.dispatch({ type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE", error: body.body });
  });
};