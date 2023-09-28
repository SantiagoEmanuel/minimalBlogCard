import './style.css'
import img from '/cactus_img.jpg'

document.querySelector('#app').innerHTML = `
  <main class='w-full'>
    <div class='w-[368px] flex flex-col items-center p-4'>
      <div class='pb-4'>
        <img src=${img} alt='Cactus' class='w-[336px] h-[152px]'>
      </div>
      <div class='flex flex-col gap-[16px]'>
        <p class='bg-[#e2d7f1] text-[10px] text-[#883AE1] w-[65px] h-[21px] flex items-center justify-center text-center rounded-lg border-[#d3bff0] border-[1px] font-[700] font-Sora'>Design</p>
        <div class='flex flex-col gap-[4px]'>
          <h2 class='m-0 p-0 text-lg text-[#20293A] font-extrabold font-Sora'>Embracing Minimalism</h2>
          <p class='m-0 p-0 text-sm text-[#6C727F] font-Sora'>From minimalist sculptures to minimalist paintings, this blog will inspire you yo appreciate the beauty that lies in simplicity</p>
        </div>
      </div>
      <footer class='flex items-end mt-[4px] mb-[4px] h-[50px] w-full'><p class='text-end text-sm text-[#6C727F] font-Sora'>Annie Spratt</p></footer>
    </div>
  </main>
`
