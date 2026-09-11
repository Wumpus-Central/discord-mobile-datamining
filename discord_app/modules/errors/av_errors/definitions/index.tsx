// === Module 17917: ErrorDefinitions ===

// Module 17917 (ErrorDefinitions)
import AVError from "AVError" /* 9200 */;
import AVErrorNoAudioInputDetected from "AVErrorNoAudioInputDetected" /* 17918 */;
import AVErrorNoInputDevices from "AVErrorNoInputDevices" /* 17920 */;
import AVErrorStreamViewLowFPS from "AVErrorStreamViewLowFPS" /* 17921 */;
import AVErrorStreamViewHighPacketLoss from "AVErrorStreamViewHighPacketLoss" /* 17923 */;
import AVErrorStreamSendHighPacketLoss from "AVErrorStreamSendHighPacketLoss" /* 17924 */;
import AVErrorStreamSendLowFPS from "AVErrorStreamSendLowFPS" /* 17925 */;
import AVErrorStreamBadNetworkQuality from "AVErrorStreamBadNetworkQuality" /* 17926 */;
import AVErrorStreamSoundshareFailed from "AVErrorStreamSoundshareFailed" /* 17927 */;
import AVErrorStreamFailedToStart from "AVErrorStreamFailedToStart" /* 17928 */;
import AVErrorStreamReconnecting from "AVErrorStreamReconnecting" /* 17929 */;
import AVErrorScreenshareOSError from "AVErrorScreenshareOSError" /* 17930 */;
import AVErrorAudioCaptureSampleRateMismatch from "AVErrorAudioCaptureSampleRateMismatch" /* 17931 */;
import AVErrorVideoStreamSenderReadyTimeout from "AVErrorVideoStreamSenderReadyTimeout" /* 17932 */;
import AVErrorVideoStreamReceiverReadyTimeout from "AVErrorVideoStreamReceiverReadyTimeout" /* 17933 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStream from "AVErrorVideoStreamSenderReadyTimeoutNoStream" /* 17934 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStream from "AVErrorVideoStreamReceiverReadyTimeoutNoStream" /* 17935 */;
import AVErrorCameraSendLowFPS from "AVErrorCameraSendLowFPS" /* 17936 */;
import size from "module_2" /* 2 */;

const obj = {};
obj[AVError.AVError.NO_AUDIO_INPUT_DETECTED] = AVErrorNoAudioInputDetected.AVErrorNoAudioInputDetectedDefinition;
obj[AVError.AVError.NO_INPUT_DEVICES] = AVErrorNoInputDevices.AVErrorNoInputDevicesDefinition;
obj[AVError.AVError.STREAM_VIEW_LOW_FPS] = AVErrorStreamViewLowFPS.AVErrorStreamViewLowFPSDefinition;
obj[AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = AVErrorStreamViewHighPacketLoss.AVErrorStreamViewHighPacketLossDefinition;
obj[AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS] = AVErrorStreamSendHighPacketLoss.AVErrorStreamSendHighPacketLossDefinition;
obj[AVError.AVError.STREAM_SEND_LOW_FPS] = AVErrorStreamSendLowFPS.AVErrorStreamSendLowFPSDefinition;
obj[AVError.AVError.STREAM_BAD_NETWORK_QUALITY] = AVErrorStreamBadNetworkQuality.AVErrorStreamBadNetworkQualityDefinition;
obj[AVError.AVError.STREAM_SOUNDSHARE_FAILED] = AVErrorStreamSoundshareFailed.AVErrorStreamSoundshareFailedDefinition;
obj[AVError.AVError.STREAM_FAILED_TO_START] = AVErrorStreamFailedToStart.AVErrorStreamFailedToStartDefinition;
obj[AVError.AVError.STREAM_RECONNECTING] = AVErrorStreamReconnecting.AVErrorStreamReconnectingDefinition;
obj[AVError.AVError.SCREENSHARE_OS_ERROR] = AVErrorScreenshareOSError.AVErrorScreenshareOSErrorDefinition;
obj[AVError.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = AVErrorAudioCaptureSampleRateMismatch.AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = AVErrorVideoStreamSenderReadyTimeout.AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = AVErrorVideoStreamReceiverReadyTimeout.AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamSenderReadyTimeoutNoStream.AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamReceiverReadyTimeoutNoStream.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[AVError.AVError.CAMERA_SEND_LOW_FPS] = AVErrorCameraSendLowFPS.AVErrorCameraSendLowFPSDefinition;
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;