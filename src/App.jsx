import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Justify } from 'react-bootstrap-icons';

function App() {


  return (
    <>

      <Justify type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>

      <Splide
        options={{
          rewind: true,
          arrows: false,
          type: 'loop',
          autoplay: true,
          perPage: 3,
          gap: 10,
        }}
      >

        <SplideSlide>
          <p>SATU</p>
        </SplideSlide>
        <SplideSlide>
          <p>DUA</p>
        </SplideSlide>
        <SplideSlide>
          <p>TIGA</p>
        </SplideSlide>
        <SplideSlide>
          <p>EMPAT</p>
        </SplideSlide>
        <SplideSlide>
          <p>LIMA</p>
        </SplideSlide>
      </Splide>

    </>
  )
}

export default App
