import React from 'react';

function Grid() {
    return (
        <>

            <div className="grid grid-cols-4 gap-4">
                <div className="w-32 h-30 bg-purple-500 text-white">01</div>
                <div className="w-32 h-30 bg-purple-500 text-white">02</div>
                <div className="w-32 h-30 bg-purple-500 text-white">03</div>
                <div className="w-32 h-30 bg-purple-500 text-white">04</div>
                <div className="w-32 h-30 bg-purple-500 text-white">05</div>
                <div className="w-32 h-30 bg-purple-500 text-white">06</div>
                <div className="w-32 h-30 bg-purple-500 text-white">07</div>
                <div className="w-32 h-30 bg-purple-500 text-white">08</div>
                <div className="w-32 h-30 bg-purple-500 text-white">09</div>
            </div>

            <br />

            <div className="grid grid-cols-4 gap-4">
                <div className="w-32 h-30 bg-red-200 text-white">01</div>
                <div className="w-32 h-30 bg-red-200 text-white">02</div>
                <div className="w-32 h-30 bg-red-200 text-white">03</div>
                <div className="w-32 h-30 bg-red-200 text-white">04</div>
                <div className="w-32 h-30 bg-red-200 text-white">05</div>
                <div className="col-span-3 grid grid-cols-subgrid gap-4">
                    <div className="col-start-2 w-32 h-30 bg-red-200 text-white">06</div>
                </div>
            </div>

            <br />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                <div className="w-32 h-24 bg-amber-300 text-white">01</div>
                <div className="w-32 h-24 bg-amber-300 text-white">02</div>
                <div className="w-32 h-24 bg-amber-300 text-white">03</div>
                <div className="w-32 h-24 bg-amber-300 text-white">04</div>
                <div className="w-32 h-24 bg-amber-300 text-white">05</div>

            </div>

            <br />

            <div class="grid grid-cols-3 gap-4">
                <div class="w-32 h-24 bg-black text-white">01</div>
                <div class="w-32 h-24 bg-black text-white">02</div>
                <div class="w-32 h-24 bg-black text-white">03</div>
                <div class="col-span-2 w-32 h-24 bg-black text-white">04</div>
                <div class="w-32 h-24 bg-black text-white">05</div>
                <div class="w-32 h-24 bg-black text-white">06</div>
                <div class="col-span-2 w-32 h-24 bg-black text-white">07</div>
            </div>
            <br />
            <div class="grid grid-cols-6 gap-4">
                <div className="bg-slate-800 h-24"></div>
                <div class="col-span-4 col-start-2 w-full h-24 bg-amber-800 text-white">01</div>
                <div className="bg-slate-800 h-24"></div>
                <div class="col-start-1 col-end-3 w-full h-24 bg-amber-800 text-white">02</div>
                <div className="bg-slate-800 h-24"></div>
                <div className="bg-slate-800 h-24"></div>
                <div class="col-span-2 col-end-7 w-full h-24 bg-amber-800 text-white">03</div>
                <div class="col-start-1 col-end-7 w-full h-24 bg-amber-800 text-white">04</div>
            </div>

            <br />

            <div className="grid md:grid-cols-5 gap-2">
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">01</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">02</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">03</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">04</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">05</div>
            </div>

            <br />

            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="w-32 h-24 bg-pink-400 text-white">01</div>
                <div className="w-32 h-24 bg-pink-400 text-white">02</div>
                <div className="w-32 h-24 bg-pink-400 text-white">03</div>
                <div className="w-32 h-24 bg-pink-400 text-white">04</div>
                <div className="w-32 h-24 bg-pink-400 text-white">05</div>
                <div className="w-32 h-24 bg-pink-400 text-white">06</div>
                <div className="w-32 h-24 bg-pink-400 text-white">07</div>
                <div className="w-32 h-24 bg-pink-400 text-white">08</div>
                <div className="w-32 h-24 bg-pink-400 text-white">09</div>
            </div>

            <br />

            <div className="grid grid-flow-col grid-rows-4 gap-4">
                <div className="w-32 h-24 bg-blue-400 text-white">01</div>
                <div className="w-32 h-24 bg-blue-400 text-white">02</div>
                <div className="w-32 h-24 bg-blue-400 text-white">03</div>
                <div className="w-32 h-24 bg-blue-400 text-white">04</div>
                <div className="w-32 h-24 bg-blue-400 text-white">05</div>
                <div class="row-span-3 grid grid-rows-subgrid gap-4">
                    <div class="row-start-2 w-32 h-24 bg-pink-400 text-white">06</div>
                </div>
                <div className="w-32 h-24 bg-blue-400 text-white">07</div>
                <div className="w-32 h-24 bg-blue-400 text-white">08</div>
                <div className="w-32 h-24 bg-blue-400 text-white">09</div>
                <div className="w-32 h-24 bg-blue-400 text-white">10</div>
            </div>

            <br />

            <div className="grid grid-rows-2 md:grid-cols-5 gap-3">
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">01</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">02</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">03</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">04</div>
                <div className="h-24 w-32 bg-amber-300 flex items-center justify-center">05</div>
            </div>


            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 w-full h-52 bg-blue-400 text-white">01</div>
                <div className="col-span-2 w-full h-24 bg-blue-400 text-white">02</div>
                <div className="col-span-2 row-span-2 w-full h-24 bg-blue-400 text-white">03</div>
            </div>

            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-2 row-start-2 w-full h-52 bg-emerald-500 text-white">01</div>
                <div className="row-span-2 row-end-3 w-full h-52 bg-emerald-500 text-white">02</div>
                <div className="row-start-1 row-end-4 w-full h-70 bg-emerald-500 text-white">03</div>
            </div>

            <br />

            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-3">
                <div className="col-span-2 w-full h-52 bg-blue-400 text-white">01</div>
                <div className="col-span-2 w-full h-52 bg-blue-400 text-white">02</div>
                <div className='w-full h-52 bg-blue-400 text-white'>03</div>
                <div className='w-full h-52 bg-blue-400 text-white'>04</div>
                <div className='w-full h-52 bg-blue-400 text-white'>05</div>
            </div>

            <br />

            <div class="grid auto-cols-max grid-flow-col gap-3">
                <div className='w-70 h-52 bg-amber-500 text-white'>01</div>
                <div className='w-70 h-52 bg-amber-500 text-white'>02</div>
                <div className='w-70 h-52 bg-amber-500 text-white'>03</div>
            </div>

            <br />

            <div class="grid grid-flow-row auto-rows-max gap-3">
                <div className='w-70 h-52 bg-amber-800 text-white'>01</div>
                <div className='w-70 h-52 bg-amber-800 text-white'>02</div>
                <div className='w-70 h-52 bg-amber-800 text-white'>03</div>
            </div>

            <br />

            <div className="grid grid-cols-3 gap-x-10 gap-y-6">
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">01</div>
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">02</div>
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">03</div>
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">04</div>
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">05</div>
                <div className="w-64 h-52 border-indigo-400 text-white bg-gray-800">06</div>
            </div>
        </>
    );
}

export default Grid;