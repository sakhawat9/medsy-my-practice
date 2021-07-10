const RightDrawer = () => {
    return (
        <div className="drawer drawer-cart open">
            <div className="flex flex-col w-full h-full">
                <div className="relative flex justify-center w-full border-b border-gray-200 px-30px py-20px">
                    <button className="absolute flex items-center justify-center w-auto h-10 text-gray-500 transition duration-300 top-half -mt-20px left-30px focus:outline-none hover:text-gray-900" aria-label="close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="12px" viewBox="0 0 18.738 12">
                            <path data-name="Path 17147" d="M1252.468,501.849l5.7-5.922,1.5,1.567-3.395,3.143.091.214h14.849v2.108H1256.2l3.654,3.43-1.558,1.538Z" transform="translate(-1252.468 -495.927)" fill="currentColor"></path>
                        </svg>
                    </button>
                    <h2 className="m-0 font-bold text-24px">Your Basket</h2>
                </div>
                {/* <div className="flex-auto">
                    <p className="px-10 leading-loose text-center text-gray-900">You have not added anything in your cart yet. Start adding the products you like.</p>
                    <div className="flex items-center justify-center mt-40px md:mt-95px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="166px" height="210px" viewBox="0 0 165.759 210">
                            <g data-name="empty cart" transform="translate(-758 -414.992)">
                                <g data-name="Ñëîé 2" transform="translate(758 414.992)">
                                    <path data-name="Path 17149" d="M761.008,613.9c-1.364,1.011-2.6,2.226-2.5,4.164.2,4.121,7.278,5.11,10.172,5.5,5.125.7,10.26.592,15.411.787q28.06,1.062,56.146.4,14.415-.321,28.818-1.047c8.434-.422,17.828.119,25.819-3.139a111.905,111.905,0,0,0,13.9-7c3.722-2.162,8.549-4.225,10.755-8.268,3.867-7.087-9.685-8.487-13.414-9.266-14.662-3.064-29.782-3.609-44.7-4.064a335.848,335.848,0,0,0-45.508,1.419c-18.947,2-39.206,8.411-54.681,20.353Z" transform="translate(-758.001 -415.008)" fill="#f7f7f7"></path>
                                    <g data-name="Group 3794" transform="translate(1.474 98.965)">
                                        <rect data-name="Rectangle 949" width="108.56" height="74.415" transform="translate(40.615 18.313)" fill="#f7f7f7"></rect>
                                        <g data-name="Group 3788" transform="translate(39.959)">
                                            <path data-name="Path 17150" d="M908.654,532.279H800.094l14.369-16.609a3.511,3.511,0,0,1,2.656-1.214H922.08a.911.911,0,0,1,.689,1.507Z" transform="translate(-799.438 -513.966)" fill="#fff"></path>
                                            <g data-name="Group 3787">
                                                <path data-name="Path 17151" d="M908.708,531.8H801.8a5.278,5.278,0,0,0-1.464,0,.674.674,0,0,1-.19,0l.482.671,10.592-12.244c1.252-1.447,2.447-2.983,3.774-4.363.969-1.008,2.018-.936,3.235-.936H918.744a20.618,20.618,0,0,1,2.9,0c1.323.2.1,1.4-.409,1.99L909.116,530.93l-1,1.154c-.53.612.687.837,1.074.39L920.1,519.867l2.515-2.908c.418-.483,1.057-1.033,1.02-1.726-.069-1.33-1.418-1.255-2.375-1.255H819.609c-.775,0-1.556-.027-2.331,0-1.957.068-3.073,1.172-4.249,2.531l-12.393,14.327-1.081,1.249c-.338.391.118.671.482.671H904.164c1.4,0,2.852.117,4.246,0,.062-.005.127,0,.19,0C909.337,532.755,909.576,531.8,908.708,531.8Z" transform="translate(-799.438 -513.966)" fill="#262626"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 3791" transform="translate(13.509 18.066)">
                                            <path data-name="Path 17152" d="M800.252,532.281l-26.669,10.382v74.415l26.669-10Z" transform="translate(-772.985 -532.034)" fill="#f7f7f7"></path>
                                            <g data-name="Group 3789">
                                                <path data-name="Path 17153" d="M800.025,532.111,776.684,541.2l-3.328,1.3c-.843.328-.054.537.455.339l23.341-9.086,3.328-1.3C801.323,532.122,800.534,531.913,800.025,532.111Z" transform="translate(-772.985 -532.034)" fill="#262626"></path>
                                            </g>
                                            <g data-name="Group 3790" transform="translate(26.627 3.446)">
                                                <path data-name="Path 17154" d="M800.894,606.906V535.649c0-.347-1.279-.122-1.279.343v71.261c0,.347,1.279.122,1.279-.343Z" transform="translate(-799.615 -535.48)" fill="#262626"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 3793" transform="translate(0 3.679)">
                                            <path data-name="Path 17155" d="M800.251,532.28l-26.669,10.382L760.8,530.215a2.334,2.334,0,0,1,.809-3.857l21.859-8.2a2.335,2.335,0,0,1,2.425.492Z" transform="translate(-759.475 -517.645)" fill="#f2f2f2"></path>
                                            <path data-name="Path 17156" d="M799.562,532.548l-25.98,10.113-10.859-10.774a2.334,2.334,0,0,1,.809-3.857l7.559-2.806c3.7-1.372,8.163-4.186,12.24-3.315C786.254,522.536,799.253,532.269,799.562,532.548Z" transform="translate(-759.475 -517.645)" fill="#fff"></path>
                                            <g data-name="Group 3792">
                                                <path data-name="Path 17157" d="M799.98,531.95l-23.341,9.086-3.328,1.3.859.061-9.8-9.54-2.283-2.223a3.945,3.945,0,0,1-1.288-1.683c-.587-2.18,2.286-2.714,3.741-3.259l15.545-5.827c1.193-.447,3.433-1.818,4.737-1.229a5.393,5.393,0,0,1,1.356,1.125l2.241,2.126,11.242,10.666c.378.359,1.588-.148,1.178-.537l-10.58-10.044c-1.251-1.187-2.457-2.471-3.777-3.583-1.631-1.374-3.324-.543-5.023.094l-16.38,6.141a27.105,27.105,0,0,0-4.192,1.623,2.715,2.715,0,0,0-.792,4.111,16.218,16.218,0,0,0,1.166,1.151l11.73,11.422a.8.8,0,0,0,.859.061l23.341-9.086,3.328-1.3C801.343,532.288,800.609,531.7,799.98,531.95Z" transform="translate(-759.475 -517.645)" fill="#262626"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-name="Group 3807" transform="translate(0 116.823)">
                                            <rect data-name="Rectangle 950" width="108.897" height="74.415" transform="translate(15.083 10.837)" fill="#f2f2f2"></rect>
                                            <path data-name="Path 17158" d="M881.982,544.206c-3.493,5.207-7.517,12.211-10.018,16.683a8.58,8.58,0,0,1-7.472,4.394l-91.407.2v51.6h108.9Z" transform="translate(-758.002 -531.827)" fill="#fff"></path>
                                        <g data-name="Group 3796" transform="translate(123.342 0.455)">
                                            <path data-name="Path 17159" d="M908.662,532.281l-26.669,10.382v74.415l26.669-10Z" transform="translate(-881.353 -532.281)" fill="#f7f7f7"></path>
                                            <path data-name="Path 17160" d="M908.661,556.952l-8.856,3.555a7.255,7.255,0,0,1-8.5-2.373l-9.311-12.386V617.08l26.669-10Z" transform="translate(-881.353 -532.282)" fill="#f2f2f2"></path>
                                            <g data-name="Group 3795" transform="translate(0 13.265)">
                                                <path data-name="Path 17161" d="M881.353,546.016v68.459c0,.274,1.279.073,1.279-.343V545.673C882.632,545.4,881.353,545.6,881.353,546.016Z" transform="translate(-881.353 -545.547)" fill="#262626"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 3797" transform="translate(14.477 0.182)">
                                            <path data-name="Path 17162" d="M772.824,542.976H876.462c1.713,0,3.525.169,5.233,0a11.657,11.657,0,0,0,2.831-1l7.747-3.016,15.615-6.078,1-.391c.838-.326.062-.622-.475-.413l-11.987,4.667c-4.76,1.853-9.666,3.5-14.334,5.58-.633.281.058.015.083.03-.111-.065-.458,0-.584,0H793.8c-6.707,0-13.448-.2-20.153,0h-.3c-.417,0-1.378.625-.524.625Z" transform="translate(-772.478 -532.008)" fill="#262626"></path>
                                        </g>
                                        <g data-name="Group 3798" transform="translate(14.435 23.11)">
                                            <path data-name="Path 17163" d="M908,555.459v51.672l.364-.428-12.1,4.537c-4.744,1.779-9.611,3.373-14.276,5.352-.551.234.137.041-.037.018a4.837,4.837,0,0,0-.614,0H775.758a13.137,13.137,0,0,0-2.313,0,1.664,1.664,0,0,1-.3,0l.592.423V562.661c0-.671-1.3-.483-1.3.1v54.371c0,.332.309.423.592.423H876.545a40.671,40.671,0,0,0,5.341,0,13.265,13.265,0,0,0,2.64-.938l7.654-2.87,15.743-5.9,1.015-.38a.573.573,0,0,0,.364-.428V555.364c0-.671-1.3-.483-1.3.1Z" transform="translate(-772.437 -554.938)" fill="#262626"></path>
                                        </g>
                                        <g data-name="Group 3800" transform="translate(0 10.396)">
                                            <path data-name="Path 17164" d="M881.982,542.667h-108.9l-14.358,16.6a.742.742,0,0,0,.561,1.227H866.224a.742.742,0,0,0,.561-.257Z" transform="translate(-758.001 -542.222)" fill="#f2f2f2"></path>
                                            <path data-name="Path 17165" d="M881.983,542.667H774.159c-1.659,3.206-3.253,6.454-5.006,9.61-1.077,1.94-1.284,5.1,1.864,5.1h92.468a6.948,6.948,0,0,0,4.741-1.869Z" transform="translate(-758.001 -542.222)" fill="#fff"></path>
                                            <g data-name="Group 3799">
                                                <path data-name="Path 17166" d="M882.217,542.251h-108.2a2.158,2.158,0,0,0-1.476.287,9.406,9.406,0,0,0-1.062,1.228l-2.241,2.592L758.574,558.69c-.759.878-.95,2.1.592,2.217.59.043,1.2,0,1.792,0H864.379c.519,0,1.049.033,1.567,0,1.256-.079,1.829-1.063,2.586-1.938l11.2-12.949,2.775-3.208c.512-.592-.718-.676-1.048-.294l-10.629,12.29c-1.489,1.721-2.928,3.507-4.476,5.174-.2.221.307.036-.113.1a6.843,6.843,0,0,1-.928,0H762.949a21.42,21.42,0,0,1-2.977,0c-.109-.016-.351.057-.447,0-.827-.484.428-1.478.71-1.8l12.293-14.214,1.08-1.248-.759.267H868.3c4.4,0,8.868.243,13.26,0h.19C882.294,543.079,883.079,542.251,882.217,542.251Z" transform="translate(-758 -542.222)" fill="#262626"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 3802" transform="translate(123.35)">
                                            <path data-name="Path 17167" d="M908.662,532.281l-26.669,10.381,14.889,14.388a1.167,1.167,0,0,0,1.221.253l24.273-9.1a1.167,1.167,0,0,0,.684-1.5,1.18,1.18,0,0,0-.272-.42Z" transform="translate(-881.362 -531.826)" fill="#f2f2f2"></path>
                                            <path data-name="Path 17168" d="M907.794,532.619l-25.478,10.173,13.4,13.531a1.017,1.017,0,0,0,1.1.239l10.049-3.939,6.08-2.384c1.986-.779,4.765-1.719,4.523-4.4a5.448,5.448,0,0,0-1.742-3.06C914.813,541.813,908.239,533.081,907.794,532.619Z" transform="translate(-881.362 -531.826)" fill="#fff"></path>
                                            <g data-name="Group 3801">
                                                <path data-name="Path 17169" d="M908.373,531.881l-23.341,9.086-3.328,1.3a.463.463,0,0,0-.2.781l11,10.63a47.359,47.359,0,0,0,3.887,3.756c1.3.992,3.307-.216,4.622-.708l17.433-6.535a43.4,43.4,0,0,0,4.219-1.582c2.541-1.272.065-3.245-1.062-4.363L909.245,532c-.429-.425-1.635.112-1.167.576l10.239,10.149,2.716,2.692a7.653,7.653,0,0,1,1.158,1.146c.931,1.506-2.4,2.107-3.312,2.449l-16.75,6.279-2.972,1.114a4.614,4.614,0,0,1-1.323.5c-.43-.023-.932-.679-1.211-.948l-2.327-2.249-11.816-11.423-.2.781,23.341-9.086,3.328-1.3C909.763,532.361,909.05,531.618,908.373,531.881Z" transform="translate(-881.362 -531.826)" fill="#262626"></path>
                                            </g>
                                        </g>
                                        <g data-name="Group 3806" transform="translate(115.627 29.87)">
                                            <g data-name="Group 3803">
                                                <path data-name="Path 17170" d="M873.638,562.232v12.643c0,.691,1.3.519,1.3-.086V562.146C874.938,561.455,873.638,561.627,873.638,562.232Z" transform="translate(-873.638 -561.698)" fill="#262626"></path>
                                            </g>
                                            <g data-name="Group 3804" transform="translate(0.01 15.423)">
                                                <path data-name="Path 17171" d="M873.648,577.582v1.99c0,.536,1.279.268,1.279-.157v-1.994c0-.536-1.279-.268-1.279.158Z" transform="translate(-873.648 -577.122)" fill="#262626"></path>
                                            </g>
                                            <g data-name="Group 3805" transform="translate(0.003 19.662)">
                                                <path data-name="Path 17172" d="M873.641,581.874v5.193c0,.649,1.293.445,1.293-.107v-5.194C874.934,581.117,873.641,581.322,873.641,581.874Z" transform="translate(-873.641 -581.362)" fill="#262626"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-name="Group 3816" transform="translate(129.022 172.653)">
                                        <g data-name="Group 3815">
                                            <g data-name="Group 3808" transform="translate(0.061 8.841)">
                                                <path data-name="Path 17173" d="M887.8,601.133l11.545-3.729c.768-.248.553-1.109-.23-.856l-11.544,3.724c-.768.248-.554,1.109.229.857Z" transform="translate(-887.095 -596.502)" fill="#e6e6e6"></path>
                                            </g>
                                            <g data-name="Group 3809" transform="translate(0.079 4.4)">
                                                <path data-name="Path 17174" d="M887.779,596.556l11.49-3.763c.748-.245.587-.929-.181-.677l-11.49,3.763C886.85,596.124,887.011,596.807,887.779,596.556Z" transform="translate(-887.113 -592.061)" fill="#e6e6e6"></path>
                                            </g>
                                            <g data-name="Group 3810" transform="translate(0.088)">
                                                <path data-name="Path 17175" d="M887.768,592.116l11.438-3.8c.738-.245.6-.847-.159-.595l-11.438,3.8C886.871,591.766,887.009,592.368,887.768,592.116Z" transform="translate(-887.122 -587.661)" fill="#e6e6e6"></path>
                                            </g>
                                            <g data-name="Group 3814" transform="translate(0 12.368)">
                                                <g data-name="Group 3811" transform="translate(0 2.779)">
                                                    <path data-name="Path 17176" d="M887.814,604.6l2.549-.814c.264-.084.6-.319.513-.643-.082-.307-.5-.384-.766-.3l-2.549.814c-.264.084-.6.318-.513.643C887.13,604.6,887.548,604.682,887.814,604.6Z" transform="translate(-887.034 -602.809)" fill="#e6e6e6"></path>
                                                </g>
                                                <g data-name="Group 3812" transform="translate(4.484 1.5)">
                                                    <path data-name="Path 17177" d="M892.241,602.984l2.572-.822c.166-.053.631-.2.562-.459s-.566-.164-.716-.116l-2.572.822c-.166.053-.631.2-.562.458s.565.164.716.116Z" transform="translate(-891.518 -601.53)" fill="#e6e6e6"></path>
                                                </g>
                                                <g data-name="Group 3813" transform="translate(8.996)">
                                                    <path data-name="Path 17178" d="M896.774,601.6l2.6-.829c.2-.064.622-.238.545-.522s-.542-.24-.733-.179l-2.6.829c-.2.064-.622.237-.546.522s.542.24.733.179Z" transform="translate(-896.031 -600.03)" fill="#e6e6e6"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g data-name="Group 3818" transform="translate(54.145 165.556)">
                                        <g data-name="Group 3817" transform="translate(0 10.266)">
                                            <path data-name="Path 17179" d="M813.36,598.282c3.4-3.962,9.024-6.258,14.142-6.472a21.9,21.9,0,0,1,11.223,2.587,20.11,20.11,0,0,1,3.959,2.77c.424.424,1.631-.11,1.168-.574a21.215,21.215,0,0,0-10.311-5.248A22.77,22.77,0,0,0,815.6,594.99a17.956,17.956,0,0,0-3.32,2.888c-.53.617.682.866,1.078.406Z" transform="translate(-812.15 -590.829)" fill="#262626"> </path>
                                        </g>
                                        <path data-name="Path 17180" d="M817.741,582.081a2.058,2.058,0,0,1-1.316,2.468,1.815,1.815,0,0,1-2.187-1.344c-.01-.041-.018-.082-.025-.124a2.058,2.058,0,0,1,1.316-2.468,1.815,1.815,0,0,1,2.187,1.344C817.726,582,817.734,582.039,817.741,582.081Z" transform="translate(-812.15 -580.563)" fill="#262626"></path>
                                        <ellipse data-name="Ellipse 105" cx="1.82" cy="2.03" rx="1.82" ry="2.03" transform="translate(27.194 0.674)" fill="#262626"></ellipse>
                                    </g>
                                    <g data-name="Group 3819" transform="translate(36.623)"></g>
                                    <path data-name="Path 17181" d="M852.783,535.425c-5.86.7-12.166,1.474-17.745-.961-4.633-2.022-8.486-6.274-8.188-11.589.31-5.523,4.333-9.844,9.206-12a28.738,28.738,0,0,1,17.277-1.465c2.725.562,6.01,1.367,8.284,3.062,1.9,1.418,2.654,3.946.812,5.721a11.746,11.746,0,0,1-5.116,2.376c-1.843.506-3.714.978-5.6,1.3-9.6,1.67-20.5.084-28.031-6.515a18,18,0,0,1-6.352-13.145c-.016-5.151,2.893-9.841,6.8-13.019,7.819-6.359,18.692-8.17,28.488-8.215a89.692,89.692,0,0,1,14.461,1.162,27.467,27.467,0,0,1,7.559,1.913c2.377,1.132,4.79,3.5,4.158,6.38-.6,2.726-3.741,3.59-6.074,4.269a39.208,39.208,0,0,1-9.258,1.421,106.994,106.994,0,0,1-17.708-.908,95.443,95.443,0,0,1-16.359-3.342,35.589,35.589,0,0,1-10.945-5.19,17.785,17.785,0,0,1-6.667-9.423,21.317,21.317,0,0,1,.751-13.232c3.206-8.232,11.282-13.313,19.257-16.188a86.13,86.13,0,0,1,34.219-4.559,89.853,89.853,0,0,1,17.407,2.853,73.024,73.024,0,0,1,8.568,2.8c2.328.935,4.7,2,5.883,4.359,2.287,4.544-2.242,8.848-5.857,10.89-3.967,2.24-8.6,3.562-12.986,4.726a87.8,87.8,0,0,1-17.927,2.465c-5.75.3-11.522.509-17.281.416-11.091-.178-22.467-1.582-32.5-6.6-8.715-4.359-17.3-13.24-15.119-23.857,1.029-5.011,4.77-9.35,8.619-12.511a45.257,45.257,0,0,1,13.5-7.35c9.986-3.6,20.737-4.848,31.278-5.467a152.386,152.386,0,0,1,35.151,1.891,154.547,154.547,0,0,1,17.342,4.078c.361.107,1.511-.443,1.026-.587a155.349,155.349,0,0,0-74.177-3.462c-10.463,2.169-21.408,6.038-28.756,14.17-3.6,3.99-6.054,8.865-5.471,14.35a22.211,22.211,0,0,0,7.2,13.675c8.57,7.982,21.147,10.9,32.475,11.9a153.7,153.7,0,0,0,18.3.349,159.28,159.28,0,0,0,19.467-1.427,81.223,81.223,0,0,0,15.819-4.243c4.12-1.536,8.488-3.737,10.759-7.693a6.227,6.227,0,0,0,.246-6.356c-1.259-2.226-3.472-3.28-5.742-4.2a82.585,82.585,0,0,0-18.1-4.888,91.588,91.588,0,0,0-37.7,1.937c-8.957,2.375-18.449,6.388-23.855,14.327-5.058,7.429-5.356,18.257,1.033,25.009a28.549,28.549,0,0,0,11.087,6.737,82.551,82.551,0,0,0,15.727,3.809A118.8,118.8,0,0,0,861,496.857a48.333,48.333,0,0,0,9.035-.876,23.407,23.407,0,0,0,7.707-2.64,4.725,4.725,0,0,0,2.3-5.177c-.61-2.492-2.9-4.125-5.163-5.029a34.958,34.958,0,0,0-7.782-1.755q-3.861-.583-7.759-.855c-10.36-.718-21.315.217-30.7,4.994-4.564,2.324-8.737,5.623-11.021,10.31a15.921,15.921,0,0,0,.8,15.053c5.328,9.2,17.076,12.6,27.1,12.263,3.573-.118,23.491-2.145,18.636-9.733-1.466-2.291-4.691-3.195-7.146-3.919a34.493,34.493,0,0,0-8.423-1.406c-5.48-.209-11.329.9-15.988,3.909-4.272,2.758-7.47,7.491-6.99,12.75.477,5.22,4.824,9.055,9.516,10.743,5.591,2.011,11.716,1.275,17.477.583.595-.071,1.083-.754.191-.647Z" transform="translate(-794.627 -414.992)" fill="#262626"></path>
                                </g>
                            </g>
                
                        </svg>
                    </div>
                </div> */}

                <div className="flex-grow os-host os-host-foreign cart-scrollbar os-theme-thin os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
                    <div className="os-resize-observer-host observed">
                        <div className="os-resize-observer" style={{left: "0px", right: "auto"}}></div>
                    </div>
                        <div className="os-size-auto-observer observed" style={{height: "calc(100% + 1px)", float: "left"}}>
                            <div className="os-resize-observer"></div>
                        </div>
                        <div className="os-content-glue" style={{margin: "0px", width: "449px", height: "374px"}}></div>
                        <div className="os-padding">
                            <div className="os-viewport os-viewport-native-scrollbars-invisible">
                                <div className="os-content" style={{padding: "0px", height: "100%", width: "100%"}}>
                                    <div className="relative flex items-center justify-start w-full h-auto py-6 bg-white border-b border-gray-200 px-30px last:border-b-0">
                                        <div className="flex flex-shrink-0 overflow-hidden bg-gray-200 rounded w-105px h-105px">
                                            <img src="https://s3.amazonaws.com/redqteam.com/medsy/products/fibre_sy4q5v.jpg" alt="Trueplus Fibre Food Supplement 90 Tablets" />

                                        </div>
                                        <div className="flex flex-col w-full px-15px">
                                            <span className="text-gray-700 text-13px">Trueplus Fibre Food Supplement 90 Tablets</span>
                                            <span className="text-gray-500 text-13px mt-5px mb-10px">Unit Price &nbsp;$2.5</span>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center justify-between flex-shrink-0 overflow-hidden bg-gray-900 rounded group shadow-floatingUp h-35px ">
                                                    <button className="flex items-center justify-center h-full text-white transition transition-colors duration-300 ease-in-out bg-gray-900 outline-none duration-250 w-35px hover:bg-gray-3a focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 11.344 12">
                                                            <g transform="translate(-13.989)">
                                                                <g data-name="Group 5372" transform="translate(15.399 2.327)">
                                                                    <g data-name="Group 5371">
                                                                        <path data-name="Path 17142" d="M81.683,99.28l-.016,8.526a.166.166,0,0,1-.164.164h-6.2a.166.166,0,0,1-.164-.165l-.016-8.525-.984,0,.016,8.524a1.149,1.149,0,0,0,1.148,1.148h6.2a1.149,1.149,0,0,0,1.148-1.147l.016-8.525Z" transform="translate(-74.142 -99.28)" fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                                <g data-name="Group 5374" transform="translate(13.989 1.836)">
                                                                    <g data-name="Group 5373">
                                                                        <path data-name="Path 17143" d="M24.841,78.339H14.481a.492.492,0,0,0,0,.984H24.841a.492.492,0,1,0,0-.984Z" transform="translate(-13.989 -78.339)" fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                                <g data-name="Group 5376" transform="translate(17.514)">
                                                                    <g data-name="Group 5375">
                                                                        <path data-name="Path 17144" d="M167.846,0h-2.656a.821.821,0,0,0-.82.82V2.328h.984V.984h2.328V2.328h.984V.82A.821.821,0,0,0,167.846,0Z" transform="translate(-164.371)" fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                                <g data-name="Group 5378" transform="translate(18.005 4.393)">
                                                                    <g data-name="Group 5377">
                                                                        <path data-name="Path 17145" d="M185.847,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,185.847,187.454Z" transform="translate(-185.355 -187.454)" fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                                <g data-name="Group 5380" transform="translate(20.333 4.393)">
                                                                    <g data-name="Group 5379">
                                                                        <path data-name="Path 17146" d="M285.169,187.454a.492.492,0,0,0-.492.492v3.967a.492.492,0,1,0,.984,0v-3.967A.492.492,0,0,0,285.169,187.454Z" transform="translate(-284.677 -187.454)" fill="currentColor"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                    <span className="flex items-center justify-center h-full font-semibold text-white transition-colors ease-in-out cursor-default text-13px w-40px duration-250">1</span>
                                                    <button className="flex items-center justify-center h-full text-white transition transition-colors duration-300 ease-in-out bg-gray-900 outline-none duration-250 w-35px hover:bg-gray-3a focus:outline-none">
                                                        <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12">
                                                            <g data-name="Group 5367">
                                                                <path data-name="Path 17138" d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z" fill="currentColor"></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <span className="flex-shrink-0 font-semibold text-gray-900 text-16px">$2.50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable">
                            <div className="os-scrollbar-track os-scrollbar-track-off">
                                <div className="os-scrollbar-handle" style={{width: "100%", transform: "translate(0px, 0px)"}}></div>
                            </div>
                        </div>
                        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable">
                            <div className="os-scrollbar-track os-scrollbar-track-off">
                                <div className="os-scrollbar-handle" style={{height: "100%", transform: "translate(0px, 0px)"}}></div>
                            </div>
                        </div>
                    <div className="os-scrollbar-corner"></div>
                </div>

                <div className="flex flex-col p-30px">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Subtotal &nbsp;
                            <span className="font-normal text-gray-700 text-13px">(Incl. VAT)</span>
                        </span>
                        <span className="font-semibold text-gray-900 text-18px">$0.00</span>
                    </div>
                    <button className="flex items-center justify-center flex-shrink-0 w-auto font-normal text-gray-500 uppercase transition ease-in-out bg-gray-300 rounded outline-none cursor-not-allowed duration-250 focus:outline-none hover:bg-gray-300 h-11 px-30px big mt-20px" type="button" aria-label="button" disabled="">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default RightDrawer
