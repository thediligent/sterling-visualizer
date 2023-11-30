import CarouselFadeExample from './components/Customizations'
import { useSnapshot } from 'valtio'
import { state } from './store'
export default function Overlay() {
    const snap = useSnapshot(state)
    const transition = { type: 'spring', duration: 0.8 }
    const plating = state.plating;
    const config = {
        initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
        animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
        exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
    }
    return (
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '50%' }}>
            <CarouselFadeExample style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '50%' }} />
            <div className="text-center">
                <h5>Plating Choice: {state.plating}</h5>
            </div>
        </div>
    )
}
