import './Protoflio.css'
import ProtoflioProject from '../protofolioProject/ProtoflioProject'
export default function Protoflio() {

    return <>
        <section className="portfolio">
            <h1>Portfolio</h1>
            <section className="row1">
                <ProtoflioProject name="web Design track 1" />
                <ProtoflioProject name="web Design 11" />
                <ProtoflioProject name="web Design 22" />
            </section>
            <div className="clr2"></div>
            <section className="row2">
                <ProtoflioProject name="web Design track 2" />
                <ProtoflioProject name="web Design 33" />
                <ProtoflioProject name="web Design 44" />
            </section>
        </section>
    </>
}