import React from 'react'
import { FlexPlugin } from 'flex-plugin'
import localizedStringsJp from './i18n/ja.js'
import localizedStringsFr from './i18n/fr.js'
import localizedStringsCn from './i18n/cn.js'
import localizedStringsPt from './i18n/pt-br.js'

const PLUGIN_NAME = 'I18NExamplePlugin'

export default class I18NExamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME)
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    // Switch me to what language you are after
    const lang = 'fr'
    switch (lang) {
      case 'jp':
        strings = localizedStringsJp()
        Object.keys(strings).forEach((key) => {
          if (strings[key] !== undefined) manager.strings[key] = strings[key]
        })
        break
      case 'fr':
        strings = localizedStringsFr()
        Object.keys(strings).forEach((key) => {
          if (strings[key] !== undefined) manager.strings[key] = strings[key]
        })
        break
      case 'pt':
        strings = localizedStringsPt()
        Object.keys(strings).forEach((key) => {
          if (strings[key] !== undefined) manager.strings[key] = strings[key]
        })
        break
      case 'cn':
        strings = localizedStringsCn()
        Object.keys(strings).forEach((key) => {
          if (strings[key] !== undefined) manager.strings[key] = strings[key]
        })
        break
      default:
        break
    }
  }
}
