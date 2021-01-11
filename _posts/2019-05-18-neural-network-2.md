---
title: "নিউরাল নেটওয়ার্ক এবং ডিপ লার্নিং (পর্ব-২)"
date: 2019-04-18T15:34:30-04:00
excerpt_separator: "<!--more-->"
categories:
  - blog
---


![](https://cdn-images-1.medium.com/max/2000/1*Z6g5LZfRMupudC_99542sA.png)

## নিউরাল নেটওয়ার্ক ( পর্ব-২ )

### Forward-propagation এবং Back-propagation কি এবং কিভাবে কাজ করে?

আগের আর্টিকেলটি দেখতে [***পর্ব-১](https://medium.com/@ariyanhasan/%E0%A6%A8%E0%A6%BF%E0%A6%89%E0%A6%B0%E0%A6%BE%E0%A6%B2-%E0%A6%A8%E0%A7%87%E0%A6%9F%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%AC-fb8b4c5dde55)***

এই আর্টিকেলে দেখবো যে, কিভাবে forward-propagation এবং Back-propagation কাজ করে এবং কিভাবে weight এবং bias কে আপডেট করতে হয়। এই টপিককে দুইটা পার্টে বিভক্ত করছি। প্রথম পার্টে আমরা দেখবো কিভাবে থিউরেটিক্যালি কাজ করে এবং দ্বিতীয় পার্টে দেখবো পাইথনে ইমপ্লিমেন্টেশন।

**আর্কিটেকচার**

এই আর্টিকেলে আমাদের নিউরাল নেটওয়ার্কের আর্কিটেকচার হচ্ছে একটি ইনপুট লেয়ার, একটি হিডেন লেয়ার এবং একটি আউটপুট লেয়ার। ইনপুট লেয়ার এবং হিডেন লেয়ারে তিনটি করে নিউরন থাকবে এবং আউটপুট লেয়ারে দুইটি নিউরন থাকবে। হিডেন লেয়ারে একটিভেশন ফাংশন হিসেবে sigmoid ফাংশন ইউজ করব। এবং সর্বশেষ cross-entropy ইউজ করে Error ক্যালকুলেট করব।

**উদ্যেশ্য**

* নিচের আর্কিটেকচার অনুসারে একটি নিউরাল নেটওয়ার্ক তৈরি করব।

* ইনপুট এবং আউটপুট ফিক্সড রাখবো।

* Weight এবং bias রেন্ডমলি ইনিশিয়াল করব।

* Cost ক্যালকুলেট করব।

* Error এবং Gradient ডিসেন্ট বের করব।

* Back-propagation এর মাধ্যমে Weight এবং bias আপডেট করব।

![নিউরাল নেটওয়ার্ক](https://cdn-images-1.medium.com/max/2000/1*OjxTF1vFigoyDXvdaHpFPA.png)

এই আর্টিকেলে আমরা একটি সিঙ্গেল ট্রেইনিং সেট নিয়ে কাজ করব যার ইউপুট হচ্ছে যথাক্রমে 0.1, 0.3, 0.5 এবং আমাদের নিউরাল নেটওয়ার্কের আউটপুট হবে 0.88 এবং 0.12।

**Forward-Propagation:**

প্রথমে আমাদের নিউরাল নেটওয়ার্ক এর ইনপুট ভেক্টর, weight এবং bias গুলোকে রেন্ডমলি ইনিশিয়াল করি।

![নিউরাল নেটওয়ার্ক](https://cdn-images-1.medium.com/max/2000/1*sfamTJiymusgItbXxBeULg.png)

![](https://cdn-images-1.medium.com/max/2000/1*iAmyzUtFfA4sscbN2ifr9A.png)

![](https://cdn-images-1.medium.com/max/2000/1*ZRaDmItJIdiETw8MEl6DrA.png)

এখন আমরা লজিস্টিক ফাংশন ইউজ করে প্রথম হিডেন লেয়ারের প্রতিটি নিউরনের নেট ভ্যালু এবং এক্টিভেশন ফাংশনের ভ্যালু বের করব।

*লজিস্টিক ফাংশনঃ*

Z = WX + b

এখানে,

W = weight ম্যাট্রিক্স

X = ইনপুট ভেক্টর

b = bias ভেক্টর

*এক্টিভেশন ফাংশনঃ*

![](https://cdn-images-1.medium.com/max/2000/1*qeSYvJZU0BS4px7CQzbAmw.png)

হিডেন লেয়ারের লজিস্টিক ফাংশন এবং এক্টিভেশন ফাংশনের ভ্যালু নির্ণয়ঃ

![](https://cdn-images-1.medium.com/max/2000/1*KcIzJWvYUi6IWoQtzQfSZg.png)

আউটপুট লেয়ারের লজিস্টিক ফাংশন এবং এক্টিভেশন ফাংশনের ভ্যালু নির্ণয়ঃ

![](https://cdn-images-1.medium.com/max/2000/1*95hiczeBYoS_IefQg9_D3Q.png)

সুতরাং আমাদের অরিজিনাল আউটপুট হচ্ছে [0.88, 0.12] কিন্তু আমরা পেয়েছি [0.75220666, 1.39504869] ।

তাই এখন আমরা টোটাল error ক্যালকুলেট করব।

**Error ক্যালকুলেশনঃ**

আমরা দুইটি ফর্মুলার যে কোন একটি ফর্মুলা ইউজ করে error ক্যালকুলেট করতে পারি। ফর্মুলা দুইটি হচ্ছে যথাক্রমে ‘ Mean squares error function’ এবং ‘Cross-Entropy function’।

আমরা ‘Cross-Entropy function’ ইউজ করে error ক্যালকুলেট করব। তার আগে ফর্মুলা দুইটি দেখে নেই।

Mean squares error (MSE) ফর্মুলাঃ

![](https://cdn-images-1.medium.com/max/2000/1*lE9OTRuzeg3PykpBJHqJfw.png)

Cross-Entropy function ফর্মুলাঃ

![](https://cdn-images-1.medium.com/max/2000/1*3oMtbsL99Y-NtmvxtXc5IA.png)

এখানে,

m = আউটপুট ভেক্টরের row নাম্বার

y = আউটপুট ভেক্টর

a = আউটপুট লেয়ারের এক্টিভেশন ফাংশনের ভ্যালু

Cross-Entropy ক্যালকুলেশনঃ

![](https://cdn-images-1.medium.com/max/2000/1*UnaQVRt--rzcYl3BYRmXWg.png)

সুতরাং আমাদের forward-propagation কমপ্লিট। এখন আমরা backward-propagation দেখবো।

## **backward-propagation:**

আমাদের উদ্যেশ্য হচ্ছে backpropagation এর মাধ্যমে আমাদের নেটওয়ার্কের প্রতিটি weight এর ভ্যালু আপডেট করা যাতে আমাদের আউটপুট টা টার্গেট আউটপুটের খুব কাছাকাছি হয় এবং যাতে error কমে আসে।

কিছু গুরুত্বপূর্ণ ডেরিভেটিভঃ

Cross-Entropy:

![](https://cdn-images-1.medium.com/max/2000/1*GcUIcPK6wZQ3SA4o1lj9Ew.png)

Sigmoid ফাংশনঃ

![](https://cdn-images-1.medium.com/max/2000/1*3-NXGLq2GsKzvJPMtAWqyA.png)

এখন আমরা chain Rule প্রয়োগ করে নিচের গ্রাফ অনুসারে Differentiate করব।

![চিত্রঃ Backward Propagation](https://cdn-images-1.medium.com/max/2000/1*Ux2dZBO0AfRnAs50q5rBJg.png)

এখন আমরা ধীরে ধীরে weight এবং bias গুলকে আপডেট করব। তার পূর্বে আমাদেরকে প্রথমে আউটপুট লেয়ারের একটিভেশন ফাংশন কে ডেরিভেটিভ করতে হবে তারপর (উপরের চিত্র অনুসারে ) এবং প্রতিটি weight ও bias গুলোকে ডেরিভেটিভ করে ভ্যালু বের করতে হবে। তার পর ধীরে ধীরে weight এবং bias গুলোর ভ্যালু আপডেট করবো। তার আগে আমাদের প্রয়োজনীয় ডেরিভেটিভগুলো করে নেই।

![](https://cdn-images-1.medium.com/max/2000/1*deYP4hLfptkZt29FzTI47A.png)

সুতরাং আমরা w10–w15 এবং b2 এর ডেরিভেটিভ করে ভ্যালু পেলাম।

![](https://cdn-images-1.medium.com/max/2000/1*8N8mN0YVzekqeDYV13mcOg.png)

তারপর w1 — w9 ও b1 কে ডেরিভেটিভ করে ভ্যালু বের করব। তার পূর্বে আমরা হিডেন লেয়ারের A1 এবং Z1 কে ডেরিভেটিভ করতে হবে । এখন, A1 এবং Z1 কে ডেরিভেটিভ করে ভ্যালু খুঁজে বের করি ।

![](https://cdn-images-1.medium.com/max/2000/1*BG80-csHokVY4OMnmi-aYQ.png)

একইভাবে, w1 — w9 ও b1 কে ডেরিভেটিভ করে ভ্যালু বের করি।

![](https://cdn-images-1.medium.com/max/2000/1*O0in9h8_1dHz9tEP_jp7_g.png)

**ভ্যালু আপডেটঃ**

এখন Error কমানোর জন্য, আমাদের রেন্ডমলি নেয়া weight ভ্যালু থেকে এই ভ্যালুগুলো বিয়োগ করতে হবে। কিন্তু তার আগে এই ভ্যালুগুলোর সাথে একটি 0.5 ভ্যালু গুন করে তার পর বিয়োগ করবো। একে লার্নিং রেট বলে। এরপর আমরা w10-w15 এর ভ্যালু আপডেট করব।

![](https://cdn-images-1.medium.com/max/2000/1*5hzLpHq5jQuXo6Rc_92kSA.png)

একইভাবে,

![](https://cdn-images-1.medium.com/max/2000/1*fyprSptAGRuN054QHhNWwg.png)

এরপর আমদের আপডেটেড weight গুলোকে ম্যাট্রিক্স আকারে সাজালে পাই,

![](https://cdn-images-1.medium.com/max/2000/1*kuQ8bZRTpkV4Bs5j_pE3KQ.png)

আমরা ইতিমধ্যে w1 — w9 এর ডেরিভেটিভ এর ভ্যালু পেয়েছি । এখন Error কমানোর জন্য, আমাদের রেন্ডমলি নেয়া weight ভ্যালু থেকে এই ভ্যালুগুলো বিয়োগ করতে হবে। কিন্তু তার আগে এই ভ্যালুগুলোর সাথে লার্নিং রেট 0.5 ভ্যালু গুন করে তার পর বিয়োগ করবো। তারপর w1 — w9 এর ভ্যালু আপডেট করব।

সুতরাং,

![](https://cdn-images-1.medium.com/max/2000/1*A0A1ged3LVR_7_9ueWVEXQ.png)

একইভাবে,

![](https://cdn-images-1.medium.com/max/2000/1*CTYAxQlzs9OG7a0KjWYoZQ.png)

অবশেষে, আমরা আমাদের নেটওয়ার্কের সকল weight এবং bias গুলোকে আপডেট করলাম। আমাদের ইনপুট ছিল যথাক্রমে 0.1, 0.3, 0.5। forward_propagation করার পর আমাদের নেটওয়ার্কের Error ছিলো 0.962735। Backpropagation এর প্রথম রাউন্ড শেষে weight এবং bias গুলোকে আপডেট করার পর পুনরায় যদি forward_propagation করে error ক্যালকুলেট করি তাহলে আমরা দেখবো যে, আমাদের error হচ্ছে 0.708654 যা আমাদের পূর্বের error থেকে কিছুটা কম।।

এই প্রসেসটা যদি 100 বার রিপিট করি তাহলে আমরা দেখবো যে, আমাদের টোটাল error কমে 0.366924 তে আসছে।

আপনার যদি কোন প্রশ্ন বা সাজেশন থাকে তাহলে অবশ্যই আমাকে মেইল বা social মিডিয়ার মাধ্যমে জানাবেন।

[Gmail](http://mdhasan.nsy@gmail.com) | [Twitter](https://twitter.com/ItzMuHasaN)
