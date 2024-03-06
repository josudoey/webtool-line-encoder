import { reactive, toRefs } from 'vue'
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'

export function setup () {
  const data = reactive({
    input: '',
    result: ''
  })

  return {
    ...toRefs(data),
    hexToBase64 () {
      const encoded = []
      for (const line of data.input.split('\n')) {
        if (!/^([0-9a-fA-F][0-9a-fA-F])*$/.test(line)) {
          window.alert(`'${line}' is not hex format`)
          return
        }
        encoded.push(Base64.stringify(Hex.parse(line)))
      }

      data.result = encoded.join('\n')
    }
  }
}

export { default } from './Home.vue'
