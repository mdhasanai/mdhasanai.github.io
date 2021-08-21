---
permalink: /publications/
title: "Publication"
---

### Bi-FPNFAS: Bi-Directional Feature Pyramid Network for Pixel-Wise Face Anti-Spoofing by Leveraging Fourier Spectra.
In this paper, we look into the problem of face anti-spoofing (FAS) on a frame level in an attempt to ameliorate the risks of face-spoofed attacks in biometric authentication processes. We employed a bi-directional feature pyramid network (BiFPN) that is used for convolutional multi-scaled feature extraction on the EfficientDet detection architecture, which is novel to the task of FAS. We further use these convolutional multi-scaled features in order to perform deep pixel-wise supervision. For all of our experiments, we performed evaluations across all major datasets and attained competitive results for the majority of the cases. Additionally, we showed that introducing an auxiliary self-supervision branch tasked with reconstructing the inputs in the frequency domain demonstrates an average classification error rate (ACER) of 2.92% on Protocol IV of the OULU-NPU dataset, which is significantly better than the currently available published works on pixel-wise face anti-spoofing.
 
![proposed architectures](https://www.mdpi.com/sensors/sensors-21-02799/article_deploy/html/images/sensors-21-02799-g004.png)
[ [Paper](https://doi.org/10.3390/s21082799), Code ]

### A-DeepPixBis: Attentional Angular Margin for Face Anti-Spoofing
In this paper, we propose a variant of BCE that enforces a margin in angular space and incorporate it in training the DeepPixBis model [1]. In addition, we also present a method to incorporate such a loss for attentive pixel wise supervision applicable in a fully convolutional setting. Our proposed approach achieves competitive scores in both intra and inter-dataset testing on multiple benchmark datasets.

![proposed architectures](https://github.com/mdhasanai/mdhasanai.github.io/blob/master/assets/images/model_p.png?raw=true)

[ [Paper](http://www.dicta2020.org/wp-content/uploads/2020/09/53_CameraReady.pdf), Code ] 
