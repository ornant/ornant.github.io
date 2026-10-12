---
title: Hello world
date: 2026-09-29
tag: technical
image: cover.jpg
alt: A dark curve on a warm brown gradient
---
Every hello is a wave. A voice pushes air, the push spreads outward, and a moment later it arrives somewhere as sound. This first post is a playground: it uses everything posts here can do, from moving sketches to equations, code and diagrams, and the second half, [Building blocks](#building-blocks), shows how each piece is written.

## One source

Contact with still surface at a single point and a ring travels outward. Its height at distance \( r \) from the source, at time \( t \), is roughly

$$
y(r, t) = \sin(kr - \omega t)\, e^{-r/L}
$$

where \( k = 2\pi/\lambda \) sets the wavelength \( \lambda \), \( \omega \) how fast the rings move and \( L \) how quickly they fade. Frozen at one instant, it is a wave shrinking inside its envelope \( \pm e^{-r/L} \):

<figure class="sketch">
<svg viewBox="0 0 764 292" role="img" aria-label="Graph of the wave height against distance: a sine wave that shrinks inside a decaying envelope">
<g stroke="#f5f5f4" stroke-opacity=".1" shape-rendering="crispEdges"><path d="M114.5 35V255"/><path d="M184.5 35V255"/><path d="M254.5 35V255"/><path d="M324.5 35V255"/><path d="M394.5 35V255"/><path d="M464.5 35V255"/><path d="M534.5 35V255"/><path d="M604.5 35V255"/><path d="M674.5 35V255"/><path d="M744.5 35V255"/><path d="M44 35.5H744"/><path d="M44 90.5H744"/><path d="M44 200.5H744"/><path d="M44 255.5H744"/></g>
<g stroke="#f5f5f4" stroke-opacity=".45" shape-rendering="crispEdges"><path d="M44.5 35V255M44 145.5H744"/></g>
<g fill="none" stroke="#9b7861" stroke-width="1.2" stroke-dasharray="4 4"><path d="M44.0 35.0L46.0 36.0L48.0 36.9L50.0 37.9L52.0 38.9L54.0 39.8L56.0 40.7L58.0 41.7L60.0 42.6L62.0 43.5L64.0 44.4L66.0 45.3L68.0 46.2L70.0 47.1L72.0 47.9L74.0 48.8L76.0 49.6L78.0 50.5L80.0 51.3L82.0 52.2L84.0 53.0L86.0 53.8L88.0 54.6L90.0 55.4L92.0 56.2L94.0 57.0L96.0 57.8L98.0 58.6L100.0 59.3L102.0 60.1L104.0 60.8L106.0 61.6L108.0 62.3L110.0 63.1L112.0 63.8L114.0 64.5L116.0 65.2L118.0 65.9L120.0 66.6L122.0 67.3L124.0 68.0L126.0 68.7L128.0 69.4L130.0 70.1L132.0 70.7L134.0 71.4L136.0 72.1L138.0 72.7L140.0 73.3L142.0 74.0L144.0 74.6L146.0 75.2L148.0 75.9L150.0 76.5L152.0 77.1L154.0 77.7L156.0 78.3L158.0 78.9L160.0 79.5L162.0 80.0L164.0 80.6L166.0 81.2L168.0 81.8L170.0 82.3L172.0 82.9L174.0 83.4L176.0 84.0L178.0 84.5L180.0 85.1L182.0 85.6L184.0 86.1L186.0 86.6L188.0 87.2L190.0 87.7L192.0 88.2L194.0 88.7L196.0 89.2L198.0 89.7L200.0 90.2L202.0 90.7L204.0 91.2L206.0 91.6L208.0 92.1L210.0 92.6L212.0 93.0L214.0 93.5L216.0 94.0L218.0 94.4L220.0 94.9L222.0 95.3L224.0 95.8L226.0 96.2L228.0 96.6L230.0 97.1L232.0 97.5L234.0 97.9L236.0 98.3L238.0 98.7L240.0 99.1L242.0 99.6L244.0 100.0L246.0 100.4L248.0 100.8L250.0 101.1L252.0 101.5L254.0 101.9L256.0 102.3L258.0 102.7L260.0 103.1L262.0 103.4L264.0 103.8L266.0 104.2L268.0 104.5L270.0 104.9L272.0 105.2L274.0 105.6L276.0 106.0L278.0 106.3L280.0 106.6L282.0 107.0L284.0 107.3L286.0 107.7L288.0 108.0L290.0 108.3L292.0 108.6L294.0 109.0L296.0 109.3L298.0 109.6L300.0 109.9L302.0 110.2L304.0 110.5L306.0 110.8L308.0 111.2L310.0 111.5L312.0 111.8L314.0 112.0L316.0 112.3L318.0 112.6L320.0 112.9L322.0 113.2L324.0 113.5L326.0 113.8L328.0 114.0L330.0 114.3L332.0 114.6L334.0 114.9L336.0 115.1L338.0 115.4L340.0 115.7L342.0 115.9L344.0 116.2L346.0 116.4L348.0 116.7L350.0 116.9L352.0 117.2L354.0 117.4L356.0 117.7L358.0 117.9L360.0 118.2L362.0 118.4L364.0 118.6L366.0 118.9L368.0 119.1L370.0 119.3L372.0 119.6L374.0 119.8L376.0 120.0L378.0 120.2L380.0 120.5L382.0 120.7L384.0 120.9L386.0 121.1L388.0 121.3L390.0 121.5L392.0 121.7L394.0 121.9L396.0 122.1L398.0 122.4L400.0 122.6L402.0 122.8L404.0 122.9L406.0 123.1L408.0 123.3L410.0 123.5L412.0 123.7L414.0 123.9L416.0 124.1L418.0 124.3L420.0 124.5L422.0 124.7L424.0 124.8L426.0 125.0L428.0 125.2L430.0 125.4L432.0 125.5L434.0 125.7L436.0 125.9L438.0 126.1L440.0 126.2L442.0 126.4L444.0 126.6L446.0 126.7L448.0 126.9L450.0 127.0L452.0 127.2L454.0 127.4L456.0 127.5L458.0 127.7L460.0 127.8L462.0 128.0L464.0 128.1L466.0 128.3L468.0 128.4L470.0 128.6L472.0 128.7L474.0 128.9L476.0 129.0L478.0 129.2L480.0 129.3L482.0 129.4L484.0 129.6L486.0 129.7L488.0 129.8L490.0 130.0L492.0 130.1L494.0 130.2L496.0 130.4L498.0 130.5L500.0 130.6L502.0 130.8L504.0 130.9L506.0 131.0L508.0 131.1L510.0 131.3L512.0 131.4L514.0 131.5L516.0 131.6L518.0 131.7L520.0 131.9L522.0 132.0L524.0 132.1L526.0 132.2L528.0 132.3L530.0 132.4L532.0 132.5L534.0 132.7L536.0 132.8L538.0 132.9L540.0 133.0L542.0 133.1L544.0 133.2L546.0 133.3L548.0 133.4L550.0 133.5L552.0 133.6L554.0 133.7L556.0 133.8L558.0 133.9L560.0 134.0L562.0 134.1L564.0 134.2L566.0 134.3L568.0 134.4L570.0 134.5L572.0 134.6L574.0 134.7L576.0 134.8L578.0 134.9L580.0 134.9L582.0 135.0L584.0 135.1L586.0 135.2L588.0 135.3L590.0 135.4L592.0 135.5L594.0 135.6L596.0 135.6L598.0 135.7L600.0 135.8L602.0 135.9L604.0 136.0L606.0 136.1L608.0 136.1L610.0 136.2L612.0 136.3L614.0 136.4L616.0 136.4L618.0 136.5L620.0 136.6L622.0 136.7L624.0 136.7L626.0 136.8L628.0 136.9L630.0 137.0L632.0 137.0L634.0 137.1L636.0 137.2L638.0 137.2L640.0 137.3L642.0 137.4L644.0 137.4L646.0 137.5L648.0 137.6L650.0 137.6L652.0 137.7L654.0 137.8L656.0 137.8L658.0 137.9L660.0 138.0L662.0 138.0L664.0 138.1L666.0 138.2L668.0 138.2L670.0 138.3L672.0 138.3L674.0 138.4L676.0 138.5L678.0 138.5L680.0 138.6L682.0 138.6L684.0 138.7L686.0 138.7L688.0 138.8L690.0 138.8L692.0 138.9L694.0 139.0L696.0 139.0L698.0 139.1L700.0 139.1L702.0 139.2L704.0 139.2L706.0 139.3L708.0 139.3L710.0 139.4L712.0 139.4L714.0 139.5L716.0 139.5L718.0 139.6L720.0 139.6L722.0 139.7L724.0 139.7L726.0 139.8L728.0 139.8L730.0 139.9L732.0 139.9L734.0 139.9L736.0 140.0L738.0 140.0L740.0 140.1L742.0 140.1L744.0 140.2"/><path d="M44.0 255.0L46.0 254.0L48.0 253.1L50.0 252.1L52.0 251.1L54.0 250.2L56.0 249.3L58.0 248.3L60.0 247.4L62.0 246.5L64.0 245.6L66.0 244.7L68.0 243.8L70.0 242.9L72.0 242.1L74.0 241.2L76.0 240.4L78.0 239.5L80.0 238.7L82.0 237.8L84.0 237.0L86.0 236.2L88.0 235.4L90.0 234.6L92.0 233.8L94.0 233.0L96.0 232.2L98.0 231.4L100.0 230.7L102.0 229.9L104.0 229.2L106.0 228.4L108.0 227.7L110.0 226.9L112.0 226.2L114.0 225.5L116.0 224.8L118.0 224.1L120.0 223.4L122.0 222.7L124.0 222.0L126.0 221.3L128.0 220.6L130.0 219.9L132.0 219.3L134.0 218.6L136.0 217.9L138.0 217.3L140.0 216.7L142.0 216.0L144.0 215.4L146.0 214.8L148.0 214.1L150.0 213.5L152.0 212.9L154.0 212.3L156.0 211.7L158.0 211.1L160.0 210.5L162.0 210.0L164.0 209.4L166.0 208.8L168.0 208.2L170.0 207.7L172.0 207.1L174.0 206.6L176.0 206.0L178.0 205.5L180.0 204.9L182.0 204.4L184.0 203.9L186.0 203.4L188.0 202.8L190.0 202.3L192.0 201.8L194.0 201.3L196.0 200.8L198.0 200.3L200.0 199.8L202.0 199.3L204.0 198.8L206.0 198.4L208.0 197.9L210.0 197.4L212.0 197.0L214.0 196.5L216.0 196.0L218.0 195.6L220.0 195.1L222.0 194.7L224.0 194.2L226.0 193.8L228.0 193.4L230.0 192.9L232.0 192.5L234.0 192.1L236.0 191.7L238.0 191.3L240.0 190.9L242.0 190.4L244.0 190.0L246.0 189.6L248.0 189.2L250.0 188.9L252.0 188.5L254.0 188.1L256.0 187.7L258.0 187.3L260.0 186.9L262.0 186.6L264.0 186.2L266.0 185.8L268.0 185.5L270.0 185.1L272.0 184.8L274.0 184.4L276.0 184.0L278.0 183.7L280.0 183.4L282.0 183.0L284.0 182.7L286.0 182.3L288.0 182.0L290.0 181.7L292.0 181.4L294.0 181.0L296.0 180.7L298.0 180.4L300.0 180.1L302.0 179.8L304.0 179.5L306.0 179.2L308.0 178.8L310.0 178.5L312.0 178.2L314.0 178.0L316.0 177.7L318.0 177.4L320.0 177.1L322.0 176.8L324.0 176.5L326.0 176.2L328.0 176.0L330.0 175.7L332.0 175.4L334.0 175.1L336.0 174.9L338.0 174.6L340.0 174.3L342.0 174.1L344.0 173.8L346.0 173.6L348.0 173.3L350.0 173.1L352.0 172.8L354.0 172.6L356.0 172.3L358.0 172.1L360.0 171.8L362.0 171.6L364.0 171.4L366.0 171.1L368.0 170.9L370.0 170.7L372.0 170.4L374.0 170.2L376.0 170.0L378.0 169.8L380.0 169.5L382.0 169.3L384.0 169.1L386.0 168.9L388.0 168.7L390.0 168.5L392.0 168.3L394.0 168.1L396.0 167.9L398.0 167.6L400.0 167.4L402.0 167.2L404.0 167.1L406.0 166.9L408.0 166.7L410.0 166.5L412.0 166.3L414.0 166.1L416.0 165.9L418.0 165.7L420.0 165.5L422.0 165.3L424.0 165.2L426.0 165.0L428.0 164.8L430.0 164.6L432.0 164.5L434.0 164.3L436.0 164.1L438.0 163.9L440.0 163.8L442.0 163.6L444.0 163.4L446.0 163.3L448.0 163.1L450.0 163.0L452.0 162.8L454.0 162.6L456.0 162.5L458.0 162.3L460.0 162.2L462.0 162.0L464.0 161.9L466.0 161.7L468.0 161.6L470.0 161.4L472.0 161.3L474.0 161.1L476.0 161.0L478.0 160.8L480.0 160.7L482.0 160.6L484.0 160.4L486.0 160.3L488.0 160.2L490.0 160.0L492.0 159.9L494.0 159.8L496.0 159.6L498.0 159.5L500.0 159.4L502.0 159.2L504.0 159.1L506.0 159.0L508.0 158.9L510.0 158.7L512.0 158.6L514.0 158.5L516.0 158.4L518.0 158.3L520.0 158.1L522.0 158.0L524.0 157.9L526.0 157.8L528.0 157.7L530.0 157.6L532.0 157.5L534.0 157.3L536.0 157.2L538.0 157.1L540.0 157.0L542.0 156.9L544.0 156.8L546.0 156.7L548.0 156.6L550.0 156.5L552.0 156.4L554.0 156.3L556.0 156.2L558.0 156.1L560.0 156.0L562.0 155.9L564.0 155.8L566.0 155.7L568.0 155.6L570.0 155.5L572.0 155.4L574.0 155.3L576.0 155.2L578.0 155.1L580.0 155.1L582.0 155.0L584.0 154.9L586.0 154.8L588.0 154.7L590.0 154.6L592.0 154.5L594.0 154.4L596.0 154.4L598.0 154.3L600.0 154.2L602.0 154.1L604.0 154.0L606.0 153.9L608.0 153.9L610.0 153.8L612.0 153.7L614.0 153.6L616.0 153.6L618.0 153.5L620.0 153.4L622.0 153.3L624.0 153.3L626.0 153.2L628.0 153.1L630.0 153.0L632.0 153.0L634.0 152.9L636.0 152.8L638.0 152.8L640.0 152.7L642.0 152.6L644.0 152.6L646.0 152.5L648.0 152.4L650.0 152.4L652.0 152.3L654.0 152.2L656.0 152.2L658.0 152.1L660.0 152.0L662.0 152.0L664.0 151.9L666.0 151.8L668.0 151.8L670.0 151.7L672.0 151.7L674.0 151.6L676.0 151.5L678.0 151.5L680.0 151.4L682.0 151.4L684.0 151.3L686.0 151.3L688.0 151.2L690.0 151.2L692.0 151.1L694.0 151.0L696.0 151.0L698.0 150.9L700.0 150.9L702.0 150.8L704.0 150.8L706.0 150.7L708.0 150.7L710.0 150.6L712.0 150.6L714.0 150.5L716.0 150.5L718.0 150.4L720.0 150.4L722.0 150.3L724.0 150.3L726.0 150.2L728.0 150.2L730.0 150.1L732.0 150.1L734.0 150.1L736.0 150.0L738.0 150.0L740.0 149.9L742.0 149.9L744.0 149.8"/></g>
<path d="M44.0 145.0L46.0 135.2L48.0 125.7L50.0 116.5L52.0 107.7L54.0 99.4L56.0 91.5L58.0 84.3L60.0 77.6L62.0 71.6L64.0 66.3L66.0 61.8L68.0 58.0L70.0 54.9L72.0 52.7L74.0 51.2L76.0 50.5L78.0 50.6L80.0 51.4L82.0 53.0L84.0 55.3L86.0 58.3L88.0 61.9L90.0 66.1L92.0 70.9L94.0 76.2L96.0 82.0L98.0 88.1L100.0 94.6L102.0 101.5L104.0 108.5L106.0 115.7L108.0 123.0L110.0 130.4L112.0 137.7L114.0 145.0L116.0 152.1L118.0 159.1L120.0 165.8L122.0 172.3L124.0 178.4L126.0 184.1L128.0 189.4L130.0 194.3L132.0 198.7L134.0 202.5L136.0 205.9L138.0 208.7L140.0 210.9L142.0 212.5L144.0 213.6L146.0 214.1L148.0 214.1L150.0 213.5L152.0 212.3L154.0 210.6L156.0 208.5L158.0 205.8L160.0 202.7L162.0 199.2L164.0 195.3L166.0 191.1L168.0 186.6L170.0 181.8L172.0 176.9L174.0 171.7L176.0 166.4L178.0 161.1L180.0 155.7L182.0 150.3L184.0 145.0L186.0 139.8L188.0 134.7L190.0 129.8L192.0 125.0L194.0 120.6L196.0 116.4L198.0 112.5L200.0 108.9L202.0 105.7L204.0 102.9L206.0 100.5L208.0 98.4L210.0 96.8L212.0 95.6L214.0 94.8L216.0 94.4L218.0 94.5L220.0 94.9L222.0 95.8L224.0 97.0L226.0 98.6L228.0 100.5L230.0 102.8L232.0 105.3L234.0 108.2L236.0 111.3L238.0 114.6L240.0 118.0L242.0 121.7L244.0 125.5L246.0 129.3L248.0 133.2L250.0 137.2L252.0 141.1L254.0 145.0L256.0 148.8L258.0 152.6L260.0 156.2L262.0 159.6L264.0 162.9L266.0 165.9L268.0 168.8L270.0 171.4L272.0 173.7L274.0 175.8L276.0 177.6L278.0 179.1L280.0 180.3L282.0 181.2L284.0 181.7L286.0 182.0L288.0 182.0L290.0 181.6L292.0 181.0L294.0 180.1L296.0 179.0L298.0 177.5L300.0 175.9L302.0 174.0L304.0 171.9L306.0 169.7L308.0 167.3L310.0 164.7L312.0 162.1L314.0 159.3L316.0 156.5L318.0 153.6L320.0 150.7L322.0 147.9L324.0 145.0L326.0 142.2L328.0 139.5L330.0 136.8L332.0 134.3L334.0 131.9L336.0 129.7L338.0 127.6L340.0 125.7L342.0 124.0L344.0 122.5L346.0 121.2L348.0 120.1L350.0 119.2L352.0 118.5L354.0 118.1L356.0 117.9L358.0 117.9L360.0 118.2L362.0 118.6L364.0 119.3L366.0 120.2L368.0 121.2L370.0 122.4L372.0 123.8L374.0 125.3L376.0 126.9L378.0 128.7L380.0 130.6L382.0 132.5L384.0 134.5L386.0 136.6L388.0 138.7L390.0 140.8L392.0 142.9L394.0 145.0L396.0 147.0L398.0 149.0L400.0 151.0L402.0 152.8L404.0 154.6L406.0 156.2L408.0 157.7L410.0 159.1L412.0 160.4L414.0 161.5L416.0 162.4L418.0 163.2L420.0 163.9L422.0 164.4L424.0 164.7L426.0 164.8L428.0 164.8L430.0 164.6L432.0 164.3L434.0 163.8L436.0 163.2L438.0 162.4L440.0 161.5L442.0 160.5L444.0 159.4L446.0 158.2L448.0 156.9L450.0 155.6L452.0 154.1L454.0 152.7L456.0 151.1L458.0 149.6L460.0 148.1L462.0 146.5L464.0 145.0L466.0 143.5L468.0 142.0L470.0 140.6L472.0 139.3L474.0 138.0L476.0 136.8L478.0 135.7L480.0 134.7L482.0 133.7L484.0 132.9L486.0 132.2L488.0 131.7L490.0 131.2L492.0 130.8L494.0 130.6L496.0 130.5L498.0 130.5L500.0 130.6L502.0 130.9L504.0 131.2L506.0 131.7L508.0 132.3L510.0 132.9L512.0 133.6L514.0 134.4L516.0 135.3L518.0 136.3L520.0 137.3L522.0 138.3L524.0 139.4L526.0 140.5L528.0 141.6L530.0 142.8L532.0 143.9L534.0 145.0L536.0 146.1L538.0 147.2L540.0 148.2L542.0 149.2L544.0 150.1L546.0 151.0L548.0 151.8L550.0 152.6L552.0 153.2L554.0 153.8L556.0 154.3L558.0 154.8L560.0 155.1L562.0 155.4L564.0 155.5L566.0 155.6L568.0 155.6L570.0 155.5L572.0 155.3L574.0 155.1L576.0 154.7L578.0 154.3L580.0 153.9L582.0 153.3L584.0 152.7L586.0 152.1L588.0 151.4L590.0 150.6L592.0 149.9L594.0 149.1L596.0 148.3L598.0 147.5L600.0 146.6L602.0 145.8L604.0 145.0L606.0 144.2L608.0 143.4L610.0 142.7L612.0 141.9L614.0 141.3L616.0 140.6L618.0 140.0L620.0 139.5L622.0 139.0L624.0 138.5L626.0 138.2L628.0 137.9L630.0 137.6L632.0 137.4L634.0 137.3L636.0 137.2L638.0 137.3L640.0 137.3L642.0 137.4L644.0 137.6L646.0 137.9L648.0 138.2L650.0 138.5L652.0 138.9L654.0 139.4L656.0 139.8L658.0 140.3L660.0 140.9L662.0 141.4L664.0 142.0L666.0 142.6L668.0 143.2L670.0 143.8L672.0 144.4L674.0 145.0L676.0 145.6L678.0 146.2L680.0 146.7L682.0 147.2L684.0 147.7L686.0 148.2L688.0 148.6L690.0 149.0L692.0 149.4L694.0 149.7L696.0 150.0L698.0 150.2L700.0 150.4L702.0 150.5L704.0 150.6L706.0 150.7L708.0 150.7L710.0 150.6L712.0 150.5L714.0 150.4L716.0 150.2L718.0 150.0L720.0 149.7L722.0 149.4L724.0 149.1L726.0 148.8L728.0 148.4L730.0 148.0L732.0 147.6L734.0 147.2L736.0 146.8L738.0 146.3L740.0 145.9L742.0 145.4L744.0 145.0" fill="none" stroke="#f5f5f4" stroke-width="1.6" stroke-linejoin="round"/>
<g fill="#f5f5f4" fill-opacity=".6" font-family="KaTeX_Main, serif" font-size=".95em">
<text x="36" y="40" text-anchor="end">1</text><text x="36" y="150" text-anchor="end">0</text><text x="36" y="260" text-anchor="end">−1</text><text x="184" y="282" text-anchor="middle"><tspan font-family="KaTeX_Math, serif" font-style="italic">λ</tspan></text><text x="324" y="282" text-anchor="middle">2<tspan font-family="KaTeX_Math, serif" font-style="italic">λ</tspan></text><text x="464" y="282" text-anchor="middle">3<tspan font-family="KaTeX_Math, serif" font-style="italic">λ</tspan></text><text x="604" y="282" text-anchor="middle">4<tspan font-family="KaTeX_Math, serif" font-style="italic">λ</tspan></text><text x="744" y="282" text-anchor="middle">5<tspan font-family="KaTeX_Math, serif" font-style="italic">λ</tspan></text>
</g>
<g fill="#f5f5f4" font-family="KaTeX_Math, serif" font-style="italic" font-size="1.2em">
<text x="750" y="151">r</text><text x="50" y="25">y</text>
<text x="150" y="62" fill="#d9a77e" font-size=".9em">e<tspan font-size=".7em" dy="-.6em">−r/L</tspan></text>
</g>
</svg>
<figcaption>the ripple at one instant, inside its envelope</figcaption>
</figure>

Set it moving and spread it in every direction, and you get the rings below: each dot is lit by the same formula. Move your pointer to move the source, and try the sliders.

{{< sketch src="ripples.js" caption="one source · point or tap to move it" alt="A grid of dots lit by rings spreading from the pointer" >}}

## Two sources

Add a second source and the rings overlap. Where crest meets crest they add up; where crest meets trough they cancel out. The brightness at any point is the square of the sum:

$$
I \propto \big(\sin(k r_1 - \omega t) + \sin(k r_2 - \omega t)\big)^2
$$

So everything depends on two distances, one to each source:

<figure class="sketch">
<svg viewBox="0 0 764 306" role="img" aria-label="Two sources S1 and S2 with rings around them, and lines r1 and r2 from each source to a point P">
<g fill="none" stroke="#f5f5f4" stroke-opacity=".13"><circle cx="155" cy="105" r="33"/><circle cx="155" cy="105" r="67"/><circle cx="155" cy="105" r="100"/><circle cx="155" cy="200" r="33"/><circle cx="155" cy="200" r="67"/><circle cx="155" cy="200" r="100"/></g>
<g stroke="#f5f5f4" stroke-opacity=".7"><path d="M155 105L645 79M155 200L645 79"/></g>
<circle cx="155" cy="105" r="5" fill="#9b7861"/><circle cx="155" cy="200" r="5" fill="#9b7861"/><circle cx="645" cy="79" r="5" fill="#f5f5f4"/>
<g fill="#f5f5f4" font-family="KaTeX_Math, serif" font-style="italic" font-size="1.25em">
<text x="134" y="112" text-anchor="end">S<tspan font-family="KaTeX_Main, serif" font-style="normal" font-size=".7em" dy=".35em">1</tspan></text>
<text x="134" y="207" text-anchor="end">S<tspan font-family="KaTeX_Main, serif" font-style="normal" font-size=".7em" dy=".35em">2</tspan></text>
<text x="664" y="86">P</text>
<text x="394" y="81">r<tspan font-family="KaTeX_Main, serif" font-style="normal" font-size=".7em" dy=".35em">1</tspan></text>
<text x="406" y="168">r<tspan font-family="KaTeX_Main, serif" font-style="normal" font-size=".7em" dy=".35em">2</tspan></text>
</g>
</svg>
<figcaption>two distances, one to each source</figcaption>
</figure>

Bright bands sit wherever those distances differ by a whole number of wavelengths, \( r_1 - r_2 = n\lambda \). The sketch below computes the sum for every pixel, sixty times a second, on your graphics card. One source follows your pointer.

{{< sketch src="interference.js" ratio="2/1" caption="two sources · point or tap to move one" alt="Interference bands between two wave sources, one following the pointer" >}}

A few things worth noticing:

- The dark lines between the bands hold still while both waves travel, because only the difference in distance matters.
- Shorten the wavelength and the bands crowd closer together.

### The whole trick

The shader behind it is short. These lines do the work, with GLSL's built-in `distance`:

```glsl
float h = sin(k * distance(p, a) - phase)
        + sin(k * distance(p, b) - phase);
float i = h * h / 4.0;  // brightness, 0 to 1
```

> Nature uses only the longest threads to weave her patterns, so that each small piece of her fabric reveals the organization of the entire tapestry.

That was Feynman, on how a few simple laws turn up everywhere. [Interference](https://en.wikipedia.org/wiki/Wave_interference) is one of those threads: the same arithmetic explains noise-cancelling headphones, the colours in a soap film and how Wi-Fi aims its signal at your laptop.

Hello, world. Onward.

---

## Building blocks

Everything above, and how to write it.

### A new post

A post is a folder in `content/writing/`. The folder name becomes the URL, `/writing/my-post/`.

```text
content/writing/my-post/
  index.md        the post
  cover.jpg       1528×528 or larger, cropped to 764×264
  waves.js        sketches, if any
```

`index.md` starts with:

```md
---
title: Post title
date: 2026-10-01
tag: technical
image: cover.jpg
alt: What the cover shows
---
First paragraph…
```

Preview it while you write. Every post in the folder goes live when you push to `main`.

```sh
hugo server    # http://localhost:1313, reloads as you edit

# on your phone, same Wi-Fi: open the address it prints
hugo server --bind 0.0.0.0 --baseURL "http://$(ipconfig getifaddr en0):1313/"
```

### Text

Plain Markdown: `##` for sections and `###` below them, `-` for lists, `>` for quotes, `[words](https://…)` for links, backticks for `inline code` and `---` on its own line for a break like the one above. Images in the post's folder go in with `![What it shows](diagram.png)`.

### Math

```md
Inline: \( k = 2\pi/\lambda \)

$$
I \propto \big(\sin(k r_1 - \omega t) + \sin(k r_2 - \omega t)\big)^2
$$
```

Rendered when the site builds, so it is sharp and costs readers nothing. A plain `$` stays a dollar sign.

### Code

````md
```glsl
float i = h * h / 4.0;  // brightness, 0 to 1
```
````

Name the language after the backticks to get colours: `js`, `glsl`, `python`, `rust`, `go`, `sh`, `md` and most others.

### Diagrams

SVG, written straight into the post. Draw at 764 wide so one unit is one pixel on a desktop screen.

```html
<figure class="sketch">
<svg viewBox="0 0 764 300" role="img" aria-label="What the diagram shows">
  <!-- shapes and text -->
</svg>
<figcaption>caption in lowercase</figcaption>
</figure>
```

Give text sizes in `em`: 1em is 15px on a desktop and grows on small screens, so labels stay readable on phones. `font-size="1.2em"` suits labels and `.7em` subscripts. For labels that match the equations, use `font-family="KaTeX_Math"` with `font-style="italic"`, and `shape-rendering="crispEdges"` on 1px grid lines, at half-pixel positions like `x="114.5"`, so they land exactly on pixels. The graph and the two-source diagram above are full examples, and so is this one:

<figure class="sketch">
<svg viewBox="0 0 764 73" role="img" aria-label="A post in Markdown goes through Hugo to become an HTML page" font-family="Inter Tight, system-ui, sans-serif" fill="none" stroke="#f5f5f4">
<rect x="2.5" y="1.5" width="179" height="70" rx="3" stroke-opacity=".5"/>
<rect x="292.5" y="1.5" width="179" height="70" rx="3" stroke="#9b7861"/>
<rect x="582.5" y="1.5" width="179" height="70" rx="3" stroke-opacity=".5"/>
<path d="M191 36.5H282M276 30.5l6 6-6 6M481 36.5H572M566 30.5l6 6-6 6" stroke-opacity=".6"/>
<g fill="#f5f5f4" stroke="none" text-anchor="middle" letter-spacing=".17em">
<text x="92" y="42">markdown</text><text x="382" y="42" fill="#d9a77e">hugo</text><text x="672" y="42">html</text>
</g>
</svg>
<figcaption>how a post becomes a page</figcaption>
</figure>

### Sketches

Put the sketch file in the post's folder and place it in the text:

```md
{{</* sketch src="waves.js" caption="waves · tap to move" alt="Describe it" */>}}
```

`ratio="2/1"` changes the shape (the default is `16/9`). A 2D sketch, `waves.js`:

```js
// sliders: [min, max, value, step?]; toggles: true or false
export const params = { speed: [0, 5, 2], glow: true };

export default function setup({ width, height }) {
  let phase = 0; // state lives here, between frames
  return ({ ctx, width, height, dt, pointer, params, colors }) => {
    phase += dt * params.speed;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = params.glow ? colors.glow : colors.ink;
    ctx.beginPath();
    const x = pointer.inside ? pointer.x : width / 2 + Math.cos(phase) * 80;
    ctx.arc(x, height / 2, 6, 0, Math.PI * 2);
    ctx.fill();
  };
}
```

Sizes are in CSS pixels, `t` and `dt` in seconds, `pointer` is `{ x, y, inside, down }` and `colors` is the palette below. Add `export const still = true` for a diagram that only redraws when something changes. A shader sketch:

```js
export const context = 'webgl2';

export default function setup({ fragment, rgb, colors }) {
  const render = fragment(`#version 300 es
    precision highp float;
    uniform vec2 u_resolution;
    uniform float time;
    uniform vec3 glow;
    out vec4 color;
    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      color = vec4(glow * (0.5 + 0.5 * sin(uv.x * 20.0 - time)), 1.0);
    }`);
  const glow = rgb(colors.glow);
  return ({ t }) => render({ time: t, glow });
}
```

`u_resolution` is set for you; other uniforms take a number or an array of 2 to 4 numbers. `ripples.js` and `interference.js` in this folder are complete examples.

### Palette

- <span class="swatch" style="background:#f5f5f4"></span>`ink` #f5f5f4: text and lines
- <span class="swatch" style="background:#9b7861"></span>`glow` #9b7861: the warm accent
- <span class="swatch" style="background:#6e5a50"></span>`mid` #6e5a50
- <span class="swatch" style="background:#2e2624"></span>`dark` #2e2624: deep shadow
- <span class="swatch" style="background:#413734"></span>`bg` #413734: the page itself

### When a new post is ready

- Use a cover of 1528×528 or larger, so it stays sharp on Retina screens.
- Give the cover and every sketch and diagram an `alt`: a short description for screen readers and for when an image fails to load.
- Look at it on your phone (the second command under A new post), or in your browser's responsive mode.
- Push to `main`.
