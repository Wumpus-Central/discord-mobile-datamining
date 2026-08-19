// === Module 16: ? ===

// Module 16
import set from "set" /* 2 */;

if (null == window.GLOBAL_ENV) {
  const _window = window;
  window.GLOBAL_ENV = {};
}
let tmp = null != window.GLOBAL_ENV.API_VERSION;
if (!tmp) {
  const _window2 = window;
  tmp = null != window.GLOBAL_ENV.API_ENDPOINT;
}
if (!tmp) {
  const _window3 = window;
  tmp = null != window.GLOBAL_ENV.GATEWAY_ENDPOINT;
}
if (!tmp) {
  const _window4 = window;
  tmp = null != window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT;
}
if (!tmp) {
  const _window5 = window;
  tmp = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT;
}
if (!tmp) {
  const _window6 = window;
  tmp = null != window.GLOBAL_ENV.CDN_HOST;
}
if (!tmp) {
  const _window7 = window;
  tmp = null != window.GLOBAL_ENV.ASSET_ENDPOINT;
}
if (!tmp) {
  const _window8 = window;
  tmp = null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
}
if (!tmp) {
  const _window9 = window;
  tmp = null != window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS;
}
if (!tmp) {
  const _window10 = window;
  tmp = null != window.GLOBAL_ENV.WIDGET_ENDPOINT;
}
if (!tmp) {
  const _window11 = window;
  tmp = null != window.GLOBAL_ENV.INVITE_HOST;
}
if (!tmp) {
  const _window12 = window;
  tmp = null != window.GLOBAL_ENV.GUILD_TEMPLATE_HOST;
}
if (!tmp) {
  const _window13 = window;
  tmp = null != window.GLOBAL_ENV.GIFT_CODE_HOST;
}
if (!tmp) {
  const _window14 = window;
  tmp = null != window.GLOBAL_ENV.RELEASE_CHANNEL;
}
if (!tmp) {
  const _window15 = window;
  tmp = null != window.GLOBAL_ENV.DEVELOPERS_ENDPOINT;
}
if (!tmp) {
  const _window16 = window;
  tmp = null != window.GLOBAL_ENV.MARKETING_ENDPOINT;
}
if (!tmp) {
  const _window17 = window;
  tmp = null != window.GLOBAL_ENV.NETWORKING_ENDPOINT;
}
if (!tmp) {
  const _window18 = window;
  tmp = null != window.GLOBAL_ENV.BRAINTREE_KEY;
}
if (!tmp) {
  const _window19 = window;
  tmp = null != window.GLOBAL_ENV.STRIPE_KEY;
}
if (!tmp) {
  const _window20 = window;
  tmp = null != window.GLOBAL_ENV.ADYEN_KEY;
}
if (!tmp) {
  const _window21 = window;
  tmp = null != window.GLOBAL_ENV.PROJECT_ENV;
}
if (!tmp) {
  const _window22 = window;
  tmp = null != window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT;
}
if (!tmp) {
  const _window23 = window;
  tmp = null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT;
}
if (!tmp) {
  const _window24 = window;
  tmp = null != window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
}
if (!tmp) {
  const _window25 = window;
  tmp = null != window.GLOBAL_ENV.PUBLIC_PATH;
}
if (!tmp) {
  const _window26 = window;
  tmp = null != window.GLOBAL_ENV.MUX_ENV_KEY;
}
if (!tmp) {
  const _window27 = window;
  tmp = null != window.GLOBAL_ENV.WEBAUTHN_ORIGIN;
}
if (!tmp) {
  const _window28 = window;
}
global.window.GLOBAL_ENV.API_ENDPOINT = "//discord.com/api";
global.window.GLOBAL_ENV.API_VERSION = 9;
global.window.GLOBAL_ENV.GATEWAY_ENDPOINT = "wss://gateway.discord.gg";
global.window.GLOBAL_ENV.GATEWAY_ALT_ENDPOINT = "wss://gateway-aws.discord.gg";
global.window.GLOBAL_ENV.WEBAPP_ENDPOINT = "//discord.com";
global.window.GLOBAL_ENV.CDN_HOST = "cdn.discordapp.com";
global.window.GLOBAL_ENV.ASSET_ENDPOINT = "//discord.com";
global.window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT = "//media.discordapp.net";
global.window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS = "//images-ext-1.discordapp.net,//images-ext-2.discordapp.net";
global.window.GLOBAL_ENV.WIDGET_ENDPOINT = "//discord.com/widget";
global.window.GLOBAL_ENV.INVITE_HOST = "discord.gg";
global.window.GLOBAL_ENV.GUILD_TEMPLATE_HOST = "discord.new";
global.window.GLOBAL_ENV.GIFT_CODE_HOST = "discord.gift";
global.window.GLOBAL_ENV.RELEASE_CHANNEL = "alpha";
global.window.GLOBAL_ENV.DEVELOPERS_ENDPOINT = "//discord.com";
global.window.GLOBAL_ENV.MARKETING_ENDPOINT = "//discord.com";
global.window.GLOBAL_ENV.NETWORKING_ENDPOINT = "//router.discordapp.net";
global.window.GLOBAL_ENV.BRAINTREE_KEY = "production_ktzp8hfp_49pp2rp4phym7387";
global.window.GLOBAL_ENV.STRIPE_KEY = "pk_live_CUQtlpQUF0vufWpnpUmQvcdi";
global.window.GLOBAL_ENV.ADYEN_KEY = "live_E3OQ33V6GVGTXOVQZEAFQJ6DJIDVG6SY";
global.window.GLOBAL_ENV.PROJECT_ENV = "production";
global.window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT = "wss://remote-auth-gateway.discord.gg";
global.window.GLOBAL_ENV.SENTRY_TAGS = {};
global.window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN = "https://discordapp.com";
global.window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN = "https://discord.com";
global.window.GLOBAL_ENV.WEBAUTHN_ORIGIN = "discord.com";
global.window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN = "https://discord.com";
global.window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT = "//latency.discord.media/rtc";
global.window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST = "discordsays.com";
global.window.GLOBAL_ENV.PUBLIC_PATH = "/assets/";
global.window.GLOBAL_ENV.DEV_SESSION_KEY = process.env.DEV_SESSION_KEY;
global.window.GLOBAL_ENV.MUX_ENV_KEY = "1qd16mdmdjasipqg3irobln4u";
const result = set.fileFinishedImporting("utils/checkEnv.tsx");