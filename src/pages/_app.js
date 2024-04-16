// pages/_app.js
import '../styles/globals.css'; // 引入全局样式

function MyApp({ Component, pageProps }) {
    return (
        <div className="app-layout">
            {/* 这里可以添加全局布局组件，如导航栏、页脚等 */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;