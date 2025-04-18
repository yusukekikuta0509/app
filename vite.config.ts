import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '0.0.0.0',   // 全インターフェイスをリッスン
    port: 3000,        // 任意のポートに変更
    strictPort: true,  // ポート使用中ならエラー停止
  },
  plugins: [react()]
})
