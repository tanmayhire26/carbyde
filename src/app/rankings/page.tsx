import * as React from 'react';

export interface IRankingsProps {
}

export default function Rankings (props: IRankingsProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Best performing, comforting and economical SUVs</h1>

            <div className="grid grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="/path/to/your/image1.jpg"
                        alt="Card 1"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">XUV300</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra magna
                            at quam porttitor, et venenatis nulla condimentum. Sed accumsan luctus
                            metus, id interdum magna pulvinar sed.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="/path/to/your/image2.jpg"
                        alt="Card 2"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Nexon</div>
                        <p className="text-gray-700 text-base">
                            Nullam volutpat libero eu libero congue finibus. Proin id lorem euismod,
                            laoreet risus id, placerat lacus. Phasellus tempus nunc ac gravida
                            tincidunt. Integer et aliquet orci, vel fringilla mauris.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-48 object-cover"
                        src="/path/to/your/image3.jpg"
                        alt="Card 3"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Grand Vitara</div>
                        <p className="text-gray-700 text-base">
                            Sed ut tortor eget urna fringilla bibendum id eu metus. Duis ac orci
                            tincidunt, tristique lectus nec, bibendum nulla. Curabitur malesuada
                            tincidunt est, non commodo nunc commodo nec.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
