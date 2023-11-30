import Carousel from 'react-bootstrap/Carousel';
import { useSnapshot } from 'valtio'
import { state } from './../store'

function CarouselFadeExample() {
    const snap = useSnapshot(state)
    return (
        <Carousel className="options-carousel mx-auto" variant="dark" slide={false} indicators={false}>
            {/* <Carousel.Item>
                <div className="text-center pt-4">
                    <h3>Enamel</h3>
                    <div className="pt-3 color-options d-flex flex-row justify-content-center">
                        {snap.enamels.map((enamel) => (
                            <div key={enamel} className={`circle`} style={{ background: enamel }} onClick={() => (state.enamel = enamel)}></div>
                        ))}
                    </div>
                </div>
            </Carousel.Item> */}
            <Carousel.Item>
                <div className="text-center pt-4">
                    <h3>Plating</h3>
                    <div className="pt-3 color-options d-flex flex-row justify-content-center">
                        {snap.platings.map((plating) => (
                            <div key={plating} className={`circle`} style={{ background: plating }} onClick={() => (state.plating = plating)}></div>
                        ))}
                    </div>
                </div>
            </Carousel.Item>
            {/* <Carousel.Item>
                <div className="text-center pt-4">
                    <h3>Edges</h3>
                    <div className="pt-3 color-options d-flex flex-row justify-content-center">
                        {snap.edges.map((edge) => (
                            <div key={edge} className={`circle`} style={{ background: edge }} onClick={() => (state.edge = edge)}></div>
                        ))}
                    </div>
                </div>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default CarouselFadeExample;