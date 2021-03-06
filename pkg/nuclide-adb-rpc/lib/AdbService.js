/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import type {NuclideUri} from '../../commons-node/nuclideUri';
import type {ConnectableObservable} from 'rxjs';
import type {ProcessMessage} from '../../commons-node/process-rpc-types';

import * as ADB from './ADB';

export type DeviceDescription = {
  name: string,
  architecture: string,
  apiVersion: string,
  model: string,
};

export function startServer(
  adbPath: NuclideUri,
): ConnectableObservable<string> {
  return ADB.startServer(adbPath);
}

export function getDeviceList(
  adbPath: NuclideUri,
): Promise<Array<DeviceDescription>> {
  return ADB.getDeviceList(adbPath);
}

export function getDeviceArchitecture(
  adbPath: NuclideUri,
  device: string,
): Promise<string> {
  return ADB.getDeviceArchitecture(adbPath, device);
}

export function getDeviceModel(
  adbPath: NuclideUri,
  device: string,
): Promise<string> {
  return ADB.getDeviceModel(adbPath, device);
}

export function getAPIVersion(
  adbPath: NuclideUri,
  device: string,
): Promise<string> {
  return ADB.getAPIVersion(adbPath, device);
}

export function installPackage(
  adbPath: NuclideUri,
  device: string,
  packagePath: NuclideUri,
): ConnectableObservable<ProcessMessage> {
  return ADB.installPackage(adbPath, device, packagePath).publish();
}

export function uninstallPackage(
  adbPath: NuclideUri,
  device: string,
  packageName: string,
): ConnectableObservable<ProcessMessage> {
  return ADB.uninstallPackage(adbPath, device, packageName).publish();
}

export function getPidFromPackageName(
  adbPath: NuclideUri,
  device: string,
  packageName: string,
): Promise<number> {
  return ADB.getPidFromPackageName(adbPath, device, packageName);
}

export function forwardJdwpPortToPid(
  adbPath: NuclideUri,
  device: string,
  tcpPort: number,
  pid: number,
): Promise<string> {
  return ADB.forwardJdwpPortToPid(adbPath, device, tcpPort, pid);
}

export function enableWaitForDebugger(
  adbPath: NuclideUri,
  device: string,
  packageName: string,
): Promise<string> {
  return ADB.enableWaitForDebugger(adbPath, device, packageName);
}

export function launchActivity(
  adbPath: NuclideUri,
  device: string,
  packageName: string,
  activity: string,
  action: string,
): Promise<string> {
  return ADB.launchActivity(adbPath, device, packageName, activity, action);
}
